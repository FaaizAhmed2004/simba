'use client';

import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import MultiStepContactForm from '@/components/Contact/Multistep-form';

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Simba Dispatch LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with our logistics experts for personalized shipping solutions
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
          <p className="text-lg text-gray-600">Choose the method that works best for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
            <a href="tel:14108311883" className="text-blue-600 hover:text-blue-800 font-medium">
              1.410.831.1883
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">Send us a detailed message</p>
            <a href="mailto:Simbadispatchservllc@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Simbadispatchservllc@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600 mb-2">Visit our main office</p>
            <p className="text-gray-800">
              Baltimore, MD<br />
              United States
            </p>
          </div>

          {/* Business Hours */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600 mb-2">We are here to help</p>
            <div className="text-gray-800 text-sm">
              <p>Mon-Fri: 8AM-6PM EST</p>
              <p>Sat: 9AM-2PM EST</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">⚡ Fast Response Time</h3>
            <p className="text-blue-800">
              We typically respond to all inquiries within 2-4 hours during business hours.
              For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>

      {/* Multistep Contact Form */}
      <MultiStepContactForm />
    </div>
  );
}