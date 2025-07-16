'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface QuoteFormData {
  serviceType: 'FBA' | 'FBM' | 'FREIGHT' | 'STORAGE' | '';
  pickup: {
    zipCode: string;
    state: string;
  };
  delivery: {
    zipCode: string;
    state: string;
  };
  fbaDetails?: {
    unitCount: number;
    hasCustomBarcode: boolean;
  };
  fbmDetails?: {
    packages: Array<{
      weight: number;
      dimensions: {
        length: number;
        width: number;
        height: number;
      };
    }>;
  };
  storageDetails?: {
    palletCount: number;
    duration: number;
  };
  freightDetails?: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    freightClass?: string;
  };
}

interface QuoteResult {
  serviceType: string;
  pickup: {
    zipCode: string;
    state: string;
  };
  delivery: {
    zipCode: string;
    state: string;
  };
  pricing: {
    totalPrice: number;
  };
  validUntil: string;
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const router = useRouter();

  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: '',
    pickup: { zipCode: '', state: '' },
    delivery: { zipCode: '', state: '' }
  });

  const handleServiceTypeChange = (type: QuoteFormData['serviceType']) => {
    setFormData(prev => ({
      ...prev,
      serviceType: type,
      // Reset service-specific details when changing type
      fbaDetails: undefined,
      fbmDetails: undefined,
      storageDetails: undefined,
      freightDetails: undefined
    }));
    setStep(2);
  };

  const handleLocationChange = (field: string, value: string) => {
    const [section, key] = field.split('.');
    setFormData(prev => {
      if (section === 'pickup' || section === 'delivery') {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [key]: value
          }
        };
      }
      return prev;
    });
  };

  const handleServiceDetailsChange = (details: QuoteFormData['fbaDetails'] | QuoteFormData['fbmDetails'] | QuoteFormData['storageDetails'] | QuoteFormData['freightDetails']) => {
    const serviceType = formData.serviceType.toLowerCase();
    
    setFormData(prev => {
      switch (serviceType) {
        case 'fba':
          return { ...prev, fbaDetails: details as QuoteFormData['fbaDetails'] };
        case 'fbm':
          return { ...prev, fbmDetails: details as QuoteFormData['fbmDetails'] };
        case 'storage':
          return { ...prev, storageDetails: details as QuoteFormData['storageDetails'] };
        case 'freight':
          return { ...prev, freightDetails: details as QuoteFormData['freightDetails'] };
        default:
          return prev;
      }
    });
  };

  const calculateQuote = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Validate form data before sending
      if (!formData.serviceType || !formData.pickup.zipCode || !formData.delivery.zipCode) {
        setError('Please fill in all required fields');
        setIsLoading(false);
        return;
      }

      // Ensure service-specific details are present
      let isValid = true;
      switch (formData.serviceType) {
        case 'FBA':
          if (!formData.fbaDetails?.unitCount || formData.fbaDetails.unitCount <= 0) {
            setError('Please enter a valid number of units for FBA service');
            isValid = false;
          }
          break;
        case 'FBM':
          if (!formData.fbmDetails?.packages?.length || formData.fbmDetails.packages[0]?.weight <= 0) {
            setError('Please enter valid package details for FBM service');
            isValid = false;
          }
          break;
        case 'STORAGE':
          if (!formData.storageDetails?.palletCount || !formData.storageDetails?.duration || 
              formData.storageDetails.palletCount <= 0 || formData.storageDetails.duration <= 0) {
            setError('Please enter valid storage details');
            isValid = false;
          }
          break;
        case 'FREIGHT':
          if (!formData.freightDetails?.weight || formData.freightDetails.weight <= 0) {
            setError('Please enter valid freight weight');
            isValid = false;
          }
          break;
      }

      if (!isValid) {
        setIsLoading(false);
        return;
      }

      // Debug: Log the data being sent
      console.log('Sending quote data:', JSON.stringify(formData, null, 2));

      const response = await fetch('/api/quotes/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setQuote(data.data);
        setStep(4);
      } else {
        setError(data.error?.message || 'Failed to calculate quote');
      }
    } catch (err) {
      console.error('Quote calculation error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Service</h2>
        <p className="text-gray-600">Choose the logistics service you need</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          onClick={() => handleServiceTypeChange('FBA')}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">FBA Prep Services</h3>
          <p className="text-gray-600 mb-4">Amazon FBA preparation and fulfillment services</p>
          <div className="text-sm text-gray-500">
            <p>• Receiving and inspection</p>
            <p>• FNSKU labeling</p>
            <p>• Repackaging services</p>
            <p>• Starting at $0.45/unit</p>
          </div>
        </div>

        <div 
          onClick={() => handleServiceTypeChange('FBM')}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">FBM Fulfillment</h3>
          <p className="text-gray-600 mb-4">Fulfillment by Merchant shipping services</p>
          <div className="text-sm text-gray-500">
            <p>• Direct-to-customer shipping</p>
            <p>• Weight-based pricing</p>
            <p>• Fast processing</p>
            <p>• Starting at $2.00/package</p>
          </div>
        </div>

        <div 
          onClick={() => handleServiceTypeChange('FREIGHT')}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Freight Shipping</h3>
          <p className="text-gray-600 mb-4">LTL and FTL freight transportation</p>
          <div className="text-sm text-gray-500">
            <p>• Less-than-truckload (LTL)</p>
            <p>• Full truckload (FTL)</p>
            <p>• Nationwide coverage</p>
            <p>• Competitive rates</p>
          </div>
        </div>

        <div 
          onClick={() => handleServiceTypeChange('STORAGE')}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Pallet Storage</h3>
          <p className="text-gray-600 mb-4">Secure warehouse storage solutions</p>
          <div className="text-sm text-gray-500">
            <p>• Climate-controlled facilities</p>
            <p>• Flexible storage terms</p>
            <p>• Easy access and retrieval</p>
            <p>• $25/pallet/week</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocationForm = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pickup & Delivery Locations</h2>
        <p className="text-gray-600">Enter your pickup and delivery ZIP codes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pickup Location</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              value={formData.pickup.zipCode}
              onChange={(e) => handleLocationChange('pickup.zipCode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pickup ZIP code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              value={formData.pickup.state}
              onChange={(e) => handleLocationChange('pickup.state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter state"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Delivery Location</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              value={formData.delivery.zipCode}
              onChange={(e) => handleLocationChange('delivery.zipCode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter delivery ZIP code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              value={formData.delivery.state}
              onChange={(e) => handleLocationChange('delivery.state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter state"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setStep(1)}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={!formData.pickup.zipCode || !formData.delivery.zipCode}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderServiceDetails = () => {
    const ServiceDetailsForm = () => {
      switch (formData.serviceType) {
        case 'FBA':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">FBA Service Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
                <input
                  type="number"
                  min="1"
                  value={formData.fbaDetails?.unitCount || ''}
                  onChange={(e) => handleServiceDetailsChange({
                    unitCount: parseInt(e.target.value) || 0,
                    hasCustomBarcode: formData.fbaDetails?.hasCustomBarcode || false
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter number of units"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="customBarcode"
                  checked={formData.fbaDetails?.hasCustomBarcode || false}
                  onChange={(e) => handleServiceDetailsChange({
                    unitCount: formData.fbaDetails?.unitCount || 0,
                    hasCustomBarcode: e.target.checked
                  })}
                  className="mr-2"
                />
                <label htmlFor="customBarcode" className="text-sm text-gray-700">
                  I will provide custom barcodes (pricing negotiable)
                </label>
              </div>
            </div>
          );

        case 'FBM':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">FBM Package Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Weight (lbs)</label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    onChange={(e) => handleServiceDetailsChange({
                      packages: [{
                        weight: parseFloat(e.target.value) || 0,
                        dimensions: { length: 12, width: 12, height: 12 }
                      }]
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter weight"
                  />
                </div>
              </div>
            </div>
          );

        case 'STORAGE':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Storage Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Pallets</label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) => handleServiceDetailsChange({
                      palletCount: parseInt(e.target.value) || 0,
                      duration: formData.storageDetails?.duration || 0
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter number of pallets"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Storage Duration (weeks)</label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) => handleServiceDetailsChange({
                      palletCount: formData.storageDetails?.palletCount || 0,
                      duration: parseInt(e.target.value) || 0
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter duration in weeks"
                  />
                </div>
              </div>
            </div>
          );

        case 'FREIGHT':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Freight Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) => handleServiceDetailsChange({
                      weight: parseInt(e.target.value) || 0,
                      dimensions: formData.freightDetails?.dimensions || { length: 48, width: 48, height: 48 },
                      freightClass: formData.freightDetails?.freightClass
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter weight"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Freight Class (optional)</label>
                  <input
                    type="text"
                    onChange={(e) => handleServiceDetailsChange({
                      weight: formData.freightDetails?.weight || 0,
                      dimensions: formData.freightDetails?.dimensions || { length: 0, width: 0, height: 0 },
                      freightClass: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter freight class"
                  />
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
          <p className="text-gray-600">Provide details for your {formData.serviceType} service</p>
        </div>

        <ServiceDetailsForm />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={() => setStep(2)}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={calculateQuote}
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Calculating...' : 'Get Quote'}
          </button>
        </div>
      </div>
    );
  };

  const renderQuoteResults = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Quote</h2>
        <p className="text-gray-600">Here&apos;s your personalized shipping quote</p>
      </div>

      {quote && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Service:</span> {quote.serviceType}</p>
                <p><span className="font-medium">From:</span> {quote.pickup.zipCode}, {quote.pickup.state}</p>
                <p><span className="font-medium">To:</span> {quote.delivery.zipCode}, {quote.delivery.state}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-2 text-sm">
                <p className="text-2xl font-bold text-blue-600">
                  ${quote.pricing.totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  Valid until: {new Date(quote.validUntil).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => router.push('/auth/login?redirect=/dashboard/shipments/new')}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Book This Shipment
            </button>
            <button
              onClick={() => {
                setStep(1);
                setQuote(null);
                setFormData({
                  serviceType: '',
                  pickup: { zipCode: '', state: '' },
                  delivery: { zipCode: '', state: '' }
                });
              }}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Get Another Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-sm text-gray-600">
              Step {step} of 4: {
                step === 1 ? 'Select Service' :
                step === 2 ? 'Locations' :
                step === 3 ? 'Details' :
                'Quote Results'
              }
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {step === 1 && renderServiceSelection()}
          {step === 2 && renderLocationForm()}
          {step === 3 && renderServiceDetails()}
          {step === 4 && renderQuoteResults()}
        </div>
      </div>
    </div>
  );
}