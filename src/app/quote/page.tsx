'use client';

import { useState } from 'react';
import {
  TruckIcon,
  CheckCircleIcon,
  CubeIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: 'TRUCK_DISPATCHING' | 'FBA_PREP' | 'FBM_FULFILLMENT' | '';
  pickup: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  delivery: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  truckType: string;
  weight: number;
  specialRequirements: string;
  additionalNotes: string;
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    pickup: {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      date: ''
    },
    delivery: {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      date: ''
    },
    truckType: '',
    weight: 0,
    specialRequirements: '',
    additionalNotes: ''
  });

  const handleInputChange = (field: string, value: string | number) => {
    const keys = field.split('.');
    if (keys.length === 1) {
      setFormData(prev => ({ ...prev, [field]: value }));
    } else if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      if (parentKey === 'pickup' || parentKey === 'delivery') {
        setFormData(prev => ({
          ...prev,
          [parentKey]: {
            ...prev[parentKey],
            [childKey]: value
          }
        }));
      }
    }
  };

  const submitQuote = async () => {
    setIsLoading(true);
    setError('');

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
        setError('Please fill in all required fields');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/quotes/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setStep(4);
      } else {
        setError(data.error?.message || 'Failed to send quote request');
      }
    } catch (err) {
      console.error('Quote submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Service</h2>
        <p className="text-gray-600">Choose from our comprehensive logistics services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => {
            handleInputChange('serviceType', 'TRUCK_DISPATCHING');
            setStep(2);
          }}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <TruckIcon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Truck Dispatching</h3>
          <p className="text-gray-600 mb-4">All-in-one dispatching solution for owner-operators</p>
          <div className="text-sm text-gray-500">
            <p>• Load finding & booking</p>
            <p>• Route planning & optimization</p>
            <p>• Billing & invoicing services</p>
            <p>• 24/7 dispatch support</p>
          </div>
        </div>

        <div
          onClick={() => {
            handleInputChange('serviceType', 'FBA_PREP');
            setStep(2);
          }}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <CubeIcon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">FBA Prep Services</h3>
          <p className="text-gray-600 mb-4">Amazon FBA preparation and fulfillment services</p>
          <div className="text-sm text-gray-500">
            <p>• Product receiving & inspection</p>
            <p>• FNSKU labeling</p>
            <p>• Amazon warehouse shipment</p>
          </div>
        </div>

        <div
          onClick={() => {
            handleInputChange('serviceType', 'FBM_FULFILLMENT');
            setStep(2);
          }}
          className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <ShoppingCartIcon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">FBM Fulfillment</h3>
          <p className="text-gray-600 mb-4">Fulfillment by Merchant shipping services</p>
          <div className="text-sm text-gray-500">
            <p>• Order processing</p>
            <p>• Pick & pack services</p>
            <p>• Direct-to-customer shipping</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactForm = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-600">Tell us about yourself and your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your company name (optional)"
          />
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
          disabled={!formData.name || !formData.email || !formData.phone}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderLoadDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Load Details</h2>
        <p className="text-gray-600">Provide information about your load and requirements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pickup Location</h3>
          <input
            type="text"
            value={formData.pickup.address}
            onChange={(e) => handleInputChange('pickup.address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Pickup address"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={formData.pickup.city}
              onChange={(e) => handleInputChange('pickup.city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="City"
            />
            <input
              type="text"
              value={formData.pickup.state}
              onChange={(e) => handleInputChange('pickup.state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="State"
            />
          </div>
          <input
            title='date'
            type="date"
            value={formData.pickup.date}
            onChange={(e) => handleInputChange('pickup.date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Delivery Location</h3>
          <input
            type="text"
            value={formData.delivery.address}
            onChange={(e) => handleInputChange('delivery.address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Delivery address"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={formData.delivery.city}
              onChange={(e) => handleInputChange('delivery.city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="City"
            />
            <input
              type="text"
              value={formData.delivery.state}
              onChange={(e) => handleInputChange('delivery.state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="State"
            />
          </div>
          <input
            type="date"
            title='data'
            value={formData.delivery.date}
            onChange={(e) => handleInputChange('delivery.date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Truck Type</label>
          <select
            aria-label='trucktype'
            value={formData.truckType}
            onChange={(e) => handleInputChange('truckType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select truck type</option>
            <option value="dry-van">Dry Van</option>
            <option value="flatbed">Flatbed</option>
            <option value="refrigerated">Refrigerated</option>
            <option value="step-deck">Step Deck</option>
            <option value="lowboy">Lowboy</option>
            <option value="tanker">Tanker</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
          <input
            type="number"
            value={formData.weight || ''}
            onChange={(e) => handleInputChange('weight', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter weight"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Any additional information or special requirements"
        />
      </div>

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
          onClick={submitQuote}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Request Quote'}
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <CheckCircleIcon className="mx-auto h-16 w-16 text-green-600" />
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Sent!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you! We&apos;ll get back to you within 24 hours with a customized quote.
        </p>
      </div>
      <button
        onClick={() => {
          setStep(1);
          setSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            serviceType: '',
            pickup: { address: '', city: '', state: '', zipCode: '', date: '' },
            delivery: { address: '', city: '', state: '', zipCode: '', date: '' },
            truckType: '',
            weight: 0,
            specialRequirements: '',
            additionalNotes: ''
          });
        }}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Request Another Quote
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Professional logistics services tailored to your needs - from truck dispatching to Amazon fulfillment
          </p>
        </div>

        {!success && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 mx-2 ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          {step === 1 && renderServiceSelection()}
          {step === 2 && renderContactForm()}
          {step === 3 && renderLoadDetails()}
          {success && renderSuccess()}
        </div>
      </div>
    </div>
  );
}