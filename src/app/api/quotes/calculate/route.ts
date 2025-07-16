import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z.object({
  serviceType: z.enum(['FBA', 'FBM', 'FREIGHT', 'STORAGE']),
  pickup: z.object({
    zipCode: z.string().min(5, 'Valid ZIP code required'),
    state: z.string().min(2, 'State required')
  }),
  delivery: z.object({
    zipCode: z.string().min(5, 'Valid ZIP code required'),
    state: z.string().min(2, 'State required')
  }),
  // FBA specific
  fbaDetails: z.object({
    unitCount: z.number().min(1),
    hasCustomBarcode: z.boolean().optional().default(false)
  }).optional(),
  // FBM specific
  fbmDetails: z.object({
    packages: z.array(z.object({
      weight: z.number().min(0.1),
      dimensions: z.object({
        length: z.number().min(1).default(12),
        width: z.number().min(1).default(12),
        height: z.number().min(1).default(12)
      }).default({ length: 12, width: 12, height: 12 })
    }))
  }).optional(),
  // Storage specific
  storageDetails: z.object({
    palletCount: z.number().min(1),
    duration: z.number().min(1) // weeks
  }).optional(),
  // Freight specific
  freightDetails: z.object({
    weight: z.number().min(1),
    dimensions: z.object({
      length: z.number().min(1).default(48),
      width: z.number().min(1).default(48),
      height: z.number().min(1).default(48)
    }).default({ length: 48, width: 48, height: 48 }),
    freightClass: z.string().optional()
  }).optional()
});

// USA ZIP code validation
const isValidUSAZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

// Calculate FBA pricing
const calculateFBAPrice = (unitCount: number, hasCustomBarcode: boolean = false) => {
  let unitPrice = 0.75; // Default price
  
  if (unitCount >= 1500) {
    unitPrice = 0.45;
  } else if (unitCount >= 1000) {
    unitPrice = 0.50;
  } else if (unitCount >= 500) {
    unitPrice = 0.60;
  }
  
  const basePrice = unitCount * unitPrice;
  const boxCount = Math.ceil(unitCount / 50); // Assume 50 units per box
  const boxCharges = boxCount * 2.5; // Average box charge
  
  return {
    unitPrice,
    basePrice,
    boxCount,
    boxCharges,
    totalPrice: basePrice + boxCharges,
    negotiable: hasCustomBarcode
  };
};

// Calculate FBM pricing
const calculateFBMPrice = (packages: Array<{ weight: number; dimensions: { length: number; width: number; height: number } }>) => {
  let totalPrice = 0;
  const packagePricing = packages.map(pkg => {
    let price = 2.00; // 1-5 lbs
    
    if (pkg.weight > 20) {
      price = 4.00;
    } else if (pkg.weight > 15) {
      price = 3.50;
    } else if (pkg.weight > 10) {
      price = 3.00;
    } else if (pkg.weight > 5) {
      price = 2.50;
    }
    
    totalPrice += price;
    return { ...pkg, price };
  });
  
  return {
    packages: packagePricing,
    totalPrice
  };
};

// Calculate storage pricing
const calculateStoragePrice = (palletCount: number, duration: number) => {
  const weeklyRate = 25; // $25 per pallet per week
  const totalPrice = palletCount * weeklyRate * duration;
  
  return {
    palletCount,
    weeklyRate,
    duration,
    totalPrice
  };
};

// Calculate freight pricing (simplified)
const calculateFreightPrice = (weight: number, distance: number = 500) => {
  // Simplified freight calculation
  const baseRate = 2.50; // per mile
  const weightMultiplier = Math.max(1, weight / 1000);
  const totalPrice = distance * baseRate * weightMultiplier;
  
  return {
    distance,
    baseRate,
    weightMultiplier,
    totalPrice: Math.round(totalPrice * 100) / 100
  };
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the incoming data for debugging
    console.log('Received quote request:', JSON.stringify(body, null, 2));
    
    // Basic validation without Zod for now
    if (!body.serviceType || !body.pickup?.zipCode || !body.delivery?.zipCode) {
      return NextResponse.json(
        { 
          success: false, 
          error: { 
            code: 'VALIDATION_ERROR', 
            message: 'Missing required fields: serviceType, pickup.zipCode, delivery.zipCode' 
          } 
        },
        { status: 400 }
      );
    }
    
    // Use the body directly instead of validatedData for now
    const validatedData = body;
    
    // Validate USA ZIP codes
    if (!isValidUSAZipCode(validatedData.pickup.zipCode) || 
        !isValidUSAZipCode(validatedData.delivery.zipCode)) {
      return NextResponse.json(
        { 
          success: false, 
          error: { 
            code: 'INVALID_LOCATION', 
            message: 'We only serve locations within the USA' 
          } 
        },
        { status: 400 }
      );
    }
    
    let pricing;
    let serviceDetails;
    
    switch (validatedData.serviceType) {
      case 'FBA':
        if (!validatedData.fbaDetails) {
          throw new Error('FBA details required');
        }
        pricing = calculateFBAPrice(
          validatedData.fbaDetails.unitCount,
          validatedData.fbaDetails.hasCustomBarcode
        );
        serviceDetails = {
          serviceType: 'FBA',
          unitCount: validatedData.fbaDetails.unitCount,
          ...pricing
        };
        break;
        
      case 'FBM':
        if (!validatedData.fbmDetails) {
          throw new Error('FBM details required');
        }
        pricing = calculateFBMPrice(validatedData.fbmDetails.packages);
        serviceDetails = {
          serviceType: 'FBM',
          ...pricing
        };
        break;
        
      case 'STORAGE':
        if (!validatedData.storageDetails) {
          throw new Error('Storage details required');
        }
        pricing = calculateStoragePrice(
          validatedData.storageDetails.palletCount,
          validatedData.storageDetails.duration
        );
        serviceDetails = {
          serviceType: 'STORAGE',
          ...pricing
        };
        break;
        
      case 'FREIGHT':
        if (!validatedData.freightDetails) {
          throw new Error('Freight details required');
        }
        pricing = calculateFreightPrice(validatedData.freightDetails.weight);
        serviceDetails = {
          serviceType: 'FREIGHT',
          weight: validatedData.freightDetails.weight,
          ...pricing
        };
        break;
        
      default:
        throw new Error('Invalid service type');
    }
    
    const quote = {
      id: `QUOTE_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      serviceType: validatedData.serviceType,
      pickup: validatedData.pickup,
      delivery: validatedData.delivery,
      pricing: serviceDetails,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      createdAt: new Date()
    };
    
    return NextResponse.json({
      success: true,
      data: quote,
      meta: { timestamp: new Date() }
    });
    
  } catch (error) {
    console.error('Quote calculation error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.issues);
      return NextResponse.json(
        { 
          success: false, 
          error: { 
            code: 'VALIDATION_ERROR', 
            message: 'Invalid input data: ' + error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', '),
            details: error.issues 
          } 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: { 
          code: 'INTERNAL_ERROR', 
          message: 'Failed to calculate quote' 
        } 
      },
      { status: 500 }
    );
  }
}