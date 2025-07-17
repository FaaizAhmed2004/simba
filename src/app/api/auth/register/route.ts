import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().optional(),
  address: z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zipCode: z.string().min(5, 'Valid ZIP code is required')
  }),
  role: z.enum(['customer', 'operator']).default('customer')
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = registerSchema.parse(body);
    
    await connectDB();
    
    // Check if user already exists
    const existingUser = await User.findOne({ 
      email: validatedData.email.toLowerCase() 
    });
    
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: { code: 'USER_EXISTS', message: 'User already exists with this email' } },
        { status: 400 }
      );
    }
    
    // Create new user
    const user = new User({
      email: validatedData.email.toLowerCase(),
      password: validatedData.password,
      role: validatedData.role,
      profile: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        phone: validatedData.phone,
        company: validatedData.company,
        address: {
          ...validatedData.address,
          country: 'USA'
        }
      }
    });
    
    await user.save();
    
    // Remove password from response
    const userResponse = {
      id: user._id,
      email: user.email,
      role: user.role,
      profile: user.profile,
      status: user.status
    };
    
    return NextResponse.json({
      success: true,
      data: userResponse,
      meta: { timestamp: new Date() }
    }, { status: 201 });
    
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: { 
            code: 'VALIDATION_ERROR', 
            message: 'Invalid input data',
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
          message: 'Internal server error' 
        } 
      },
      { status: 500 }
    );
  }
}