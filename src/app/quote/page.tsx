'use client';

import { useState } from 'react';
import {
  TruckIcon,
  CheckCircleIcon,
  CubeIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

type ServiceType = 'TRUCK_DISPATCHING' | 'FBA_PREP' | 'FBM_FULFILLMENT';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: ServiceType | '';
  additionalNotes: string;
  // Truck dispatching specific fields
  mcNumber?: string;
  dotNumber?: string;
  truckType?: string;
  useFactoringCompany?: 'yes' | 'no' | '';
  truckOperationType?: string[]; // local, regional, otr
  pickup?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  delivery?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  weight?: number;
  specialRequirements?: string;
  // FBA Prep specific fields
  productTypes?: string[];
  monthlyVolume?: string;
  storageNeeded?: boolean;
  labelingServices?: string[];
  packagingRequirements?: string;
  qualityInspection?: boolean;
  returnProcessing?: boolean;
  // FBM Fulfillment specific fields
  orderVolume?: string;
  productCategories?: string[];
  shippingZones?: string[];
  packagingType?: string;
  integrationNeeds?: string[];
  returnHandling?: boolean;
  customBranding?: boolean;
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
    additionalNotes: ''
  });

  const handleInputChange = (field: string, value: string | number | boolean | string[]) => {
    const keys = field.split('.');
    if (keys.length === 1) {
      setFormData(prev => ({ ...prev, [field]: value }));
    } else if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      if (parentKey === 'pickup' || parentKey === 'delivery') {
        setFormData(prev => ({
          ...prev,
          [parentKey]: {
            ...(prev[parentKey] || { address: '', city: '', state: '', zipCode: '', date: '' }),
            [childKey]: value
          }
        }));
      }
    }
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = (prev[field as keyof QuoteFormData] as string[]) || [];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      return 'Please fill in all required fields';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return 'Please enter a valid phone number';
    }

    // Service-specific validation
    if (formData.serviceType === 'TRUCK_DISPATCHING') {
      if (!formData.mcNumber) {
        return 'Please enter your MC Number';
      }
      if (!formData.dotNumber) {
        return 'Please enter your DOT Number';
      }
      if (!formData.truckType) {
        return 'Please select your truck type';
      }
      if (!formData.useFactoringCompany) {
        return 'Please indicate if you use a factoring company';
      }
      if (!formData.truckOperationType || formData.truckOperationType.length === 0) {
        return 'Please select at least one operation type';
      }
    }

    return null;
  };

  const submitQuote = async () => {
    setIsLoading(true);
    setError('');

    try {
      const validationError = validateForm();
      if (validationError) {
        setError(validationError);
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
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Select Your Service</h2>
        <p className="text-gray-300">Choose from our comprehensive logistics services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => {
            setFormData({
              ...formData,
              serviceType: 'TRUCK_DISPATCHING',
              mcNumber: '',
              dotNumber: '',
              truckType: '',
              useFactoringCompany: '',
              truckOperationType: [],
              pickup: { address: '', city: '', state: '', zipCode: '', date: '' },
              delivery: { address: '', city: '', state: '', zipCode: '', date: '' },
              weight: 0,
              specialRequirements: ''
            });
            setStep(2);
          }}
          className="border-2 border-gray-700 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-gray-800 transition-colors bg-gray-900"
        >
          <TruckIcon className="h-12 w-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Complete Truck Dispatching</h3>
          <p className="text-gray-300 mb-4">All-in-one dispatching solution for owner-operators</p>
          <div className="text-sm text-gray-400">
            <p>• Load finding & booking</p>
            <p>• Route planning & optimization</p>
            <p>• Billing & invoicing services</p>
            <p>• 24/7 dispatch support</p>
          </div>
        </div>

        <div
          onClick={() => {
            setFormData({
              ...formData,
              serviceType: 'FBA_PREP',
              productTypes: [],
              monthlyVolume: '',
              storageNeeded: false,
              labelingServices: [],
              packagingRequirements: '',
              qualityInspection: false,
              returnProcessing: false
            });
            setStep(2);
          }}
          className="border-2 border-gray-700 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-gray-800 transition-colors bg-gray-900"
        >
          <CubeIcon className="h-12 w-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">FBA Prep Services</h3>
          <p className="text-gray-300 mb-4">Amazon FBA preparation and fulfillment services</p>
          <div className="text-sm text-gray-400">
            <p>• Product receiving & inspection</p>
            <p>• FNSKU labeling</p>
            <p>• Amazon warehouse shipment</p>
          </div>
        </div>

        <div
          onClick={() => {
            setFormData({
              ...formData,
              serviceType: 'FBM_FULFILLMENT',
              orderVolume: '',
              productCategories: [],
              shippingZones: [],
              packagingType: '',
              integrationNeeds: [],
              returnHandling: false,
              customBranding: false
            });
            setStep(2);
          }}
          className="border-2 border-gray-700 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-gray-800 transition-colors bg-gray-900"
        >
          <ShoppingCartIcon className="h-12 w-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">FBM Fulfillment</h3>
          <p className="text-gray-300 mb-4">Fulfillment by Merchant shipping services</p>
          <div className="text-sm text-gray-400">
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
        <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
        <p className="text-gray-300">Tell us about yourself and your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter your company name (optional)"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setStep(3)}
          disabled={!formData.name || !formData.email || !formData.phone}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderServiceDetails = () => {
    if (formData.serviceType === 'TRUCK_DISPATCHING') {
      return renderTruckDispatchingDetails();
    } else if (formData.serviceType === 'FBA_PREP') {
      return renderFBAPrepDetails();
    } else if (formData.serviceType === 'FBM_FULFILLMENT') {
      return renderFBMFulfillmentDetails();
    }
    return null;
  };

  const renderTruckDispatchingDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Truck Dispatching Details</h2>
        <p className="text-gray-300">Tell us about your truck Dispatch  requirements</p>
      </div>

      {/* Business Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Business Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">MC Number *</label>
            <input
              type="text"
              value={formData.mcNumber || ''}
              onChange={(e) => handleInputChange('mcNumber', e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              placeholder="Enter MC Number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">DOT Number *</label>
            <input
              type="text"
              value={formData.dotNumber || ''}
              onChange={(e) => handleInputChange('dotNumber', e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              placeholder="Enter DOT Number"
            />
          </div>
        </div>
      </div>

      {/* Truck Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Truck Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Type of Truck *</label>
          <select
          aria-label='truck'
            value={formData.truckType || ''}
            onChange={(e) => handleInputChange('truckType', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            required
          >
            <option value="">Select truck type</option>
            <option value="dry-van">Dry Van</option>
            <option value="flatbed">Flatbed</option>
            <option value="refrigerated">Refrigerated (Reefer)</option>
            <option value="step-deck">Step Deck</option>
            <option value="lowboy">Lowboy</option>
            <option value="tanker">Tanker</option>
            <option value="box-truck">Box Truck</option>
            <option value="car-hauler">Car Hauler</option>
            <option value="dump-truck">Dump Truck</option>
          </select>
        </div>
      </div>

      {/* Factoring Company */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Financial Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Do you use a factoring company? *</label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="useFactoringCompany"
                value="yes"
                checked={formData.useFactoringCompany === 'yes'}
                onChange={(e) => handleInputChange('useFactoringCompany', e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 focus:ring-blue-500"
                required
              />
              <span className="ml-2 text-gray-300">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="useFactoringCompany"
                value="no"
                checked={formData.useFactoringCompany === 'no'}
                onChange={(e) => handleInputChange('useFactoringCompany', e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 focus:ring-blue-500"
                required
              />
              <span className="ml-2 text-gray-300">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Operation Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Operation Preferences</h3>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">How do you plan to run the truck? (Select all that apply) *</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.truckOperationType?.includes('local') || false}
                onChange={(e) => handleCheckboxChange('truckOperationType', 'local', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-300">Local </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.truckOperationType?.includes('regional') || false}
                onChange={(e) => handleCheckboxChange('truckOperationType', 'regional', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-300">Regional (multi-state)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.truckOperationType?.includes('otr') || false}
                onChange={(e) => handleCheckboxChange('truckOperationType', 'otr', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-300">OTR (Over-the-haul)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder="Tell us more about your business, preferred lanes, experience, or any other information that would help us provide better service"
        />
      </div>

      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={submitQuote}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          <span>{isLoading ? 'Sending...' : 'Request Quote'}</span>
        </button>
      </div>
    </div>
  );

  const renderFBAPrepDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">FBA Prep Service Details</h2>
        <p className="text-gray-300">Tell us about your Amazon FBA preparation needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Monthly Volume</label>
          <select
            aria-label='volume'
            value={formData.monthlyVolume || ''}
            onChange={(e) => handleInputChange('monthlyVolume', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select monthly volume</option>
            <option value="1-100">1-100 units</option>
            <option value="101-500">101-500 units</option>
            <option value="501-1000">501-1000 units</option>
            <option value="1000+">1000+ units</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Packaging Requirements</label>
          <input
            type="text"
            value={formData.packagingRequirements || ''}
            onChange={(e) => handleInputChange('packagingRequirements', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Describe packaging needs"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="storageNeeded"
            checked={formData.storageNeeded || false}
            onChange={(e) => handleInputChange('storageNeeded', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="storageNeeded" className="text-gray-300">Storage services needed</label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="qualityInspection"
            checked={formData.qualityInspection || false}
            onChange={(e) => handleInputChange('qualityInspection', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="qualityInspection" className="text-gray-300">Quality inspection required</label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="returnProcessing"
            checked={formData.returnProcessing || false}
            onChange={(e) => handleInputChange('returnProcessing', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="returnProcessing" className="text-gray-300">Return processing services</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder="Any additional information about your FBA prep needs"
        />
      </div>

      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={submitQuote}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          <span>{isLoading ? 'Sending...' : 'Request Quote'}</span>
        </button>
      </div>
    </div>
  );

  const renderFBMFulfillmentDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">FBM Fulfillment Details</h2>
        <p className="text-gray-300">Tell us about your fulfillment requirements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Monthly Order Volume</label>
          <select
            aria-label='orderVolume'
            value={formData.orderVolume || ''}
            onChange={(e) => handleInputChange('orderVolume', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select order volume</option>
            <option value="1-50">1-50 orders</option>
            <option value="51-200">51-200 orders</option>
            <option value="201-500">201-500 orders</option>
            <option value="500+">500+ orders</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Packaging Type</label>
          <select
            aria-label='packagingtype'
            value={formData.packagingType || ''}
            onChange={(e) => handleInputChange('packagingType', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select packaging type</option>
            <option value="standard">Standard packaging</option>
            <option value="custom">Custom packaging</option>
            <option value="branded">Branded packaging</option>
            <option value="eco-friendly">Eco-friendly packaging</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="returnHandling"
            checked={formData.returnHandling || false}
            onChange={(e) => handleInputChange('returnHandling', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="returnHandling" className="text-gray-300">Return handling services</label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="customBranding"
            checked={formData.customBranding || false}
            onChange={(e) => handleInputChange('customBranding', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="customBranding" className="text-gray-300">Custom branding required</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder="Any additional information about your fulfillment needs"
        />
      </div>

      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={submitQuote}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          <span>{isLoading ? 'Sending...' : 'Request Quote'}</span>
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Quote Request Sent!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Thank you! We&apos;ll get back to you within 24 hours with a customized quote.
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setSuccess(false);
          setError('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            serviceType: '',
            additionalNotes: ''
          });
        }}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
      >
        Request Another Quote
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Free Quote</h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Professional logistics services tailored to your needs - from truck dispatch services to 3pl fulfillment
          </p>
        </div>

        {!success && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 mx-2 ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-800'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          {step === 1 && renderServiceSelection()}
          {step === 2 && renderContactForm()}
          {step === 3 && renderServiceDetails()}
          {success && renderSuccess()}
        </div>
      </div>
    </div>
  );
}