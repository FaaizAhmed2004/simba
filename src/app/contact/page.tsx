'use client';

import { useState } from 'react';
import {
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

// Form interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you within 12-24 hours during business hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error?.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again or contact us directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Simba Dispatch Services LLC",
            "description": "Professional truck dispatching, 3PL logistics, and FBA prep services",
            "url": "https://simbadispatchservices.com",
            "telephone": "+1-410-755-5627",
            "email": "cs@simbadispatchservices.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "postalCode": "32821",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5383",
              "longitude": "-81.3792"
            },
            "openingHours": "Mo-Su 08:00-17:00",
            "serviceArea": {
              "@type": "Country",
              "name": "United States"
            },
            "services": [
              "Truck Dispatching",
              "3PL Logistics Services",
              "FBA Prep Services",
              "FBM Fulfillment",
              "Load Finding",
              "Route Optimization"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-410-755-5627",
              "contactType": "customer service",
              "email": "cs@simbadispatchservices.com",
              "availableLanguage": "English"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
      <section className="bg-black text-white py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact Simba Dispatch Services LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Get professional truck dispatching, 3PL services, and FBA prep solutions. Contact our experts today for personalized logistics support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>✓ 24/7 Dispatch Support</span>
            <span>✓ Professional 3PL Services</span>
            <span>✓ FBA Prep & Fulfillment</span>
            <span>✓ Quick Response Time</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form - Centered */}
        <div className="max-w-3xl mx-auto mb-16">
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-300">
                Fill out the form below and we'll get back to you within 12-24 hours during business hours. 
                For urgent matters, please call us directly.
              </p>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-lg mb-6 flex items-start space-x-3 ${
                submitStatus.success 
                  ? 'bg-green-900/50 border border-green-700' 
                  : 'bg-red-900/50 border border-red-700'
              }`}>
                {submitStatus.success ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                )}
                <p className={`text-sm ${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical"
                  placeholder="Please tell us about your logistics needs, truck specifications, or any questions you have about our services..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information - After Form */}
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ready to streamline your logistics operations? Contact our expert team for professional 
                truck dispatching and 3PL services across the United States.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Email */}
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3 text-sm">Send us your inquiry anytime</p>
                <a 
                  href="mailto:cs@simbadispatchservices.com" 
                  className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer text-sm break-all"
                >
                  cs@simbadispatchservices.com
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-3 text-sm">Speak directly with our team</p>
                <a 
                  href="tel:+14107555627" 
                  className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                >
                  +1 (410) 755-5627
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Office Location</h3>
                <p className="text-gray-300 mb-3 text-sm">Visit us by appointment</p>
                <p className="text-gray-300 text-sm">
                  Orlando, FL 32821<br />
                  United States
                </p>
              </div>

              {/* Business Hours */}
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 mb-3 text-sm">We are here when you need us</p>
                <div className="text-gray-300 text-sm">
                  <p>Monday - Sunday</p>
                  <p className="text-blue-400 font-medium">8:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Quick Email CTA */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">
                For urgent dispatching needs or time-sensitive inquiries, send us a direct email and we&apos;ll prioritize your request.
              </p>
              <a
                href="mailto:cs@simbadispatchservices.com?subject=Urgent Dispatching Inquiry"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer text-lg"
              >
                <EnvelopeIcon className="h-6 w-6 mr-3" />
                Send Direct Email
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Professional Truck Dispatching & 3PL Services in Orlando, FL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Truck Dispatching Services</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Professional truck dispatching services for owner-operators and fleet managers. 
                  We handle load finding, route optimization, and carrier management across all 48 states.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3PL Logistics Solutions</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Comprehensive third-party logistics services including warehousing, inventory management, 
                  and distribution solutions for businesses of all sizes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">FBA Prep & Fulfillment</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Amazon FBA preparation services, FBM fulfillment, and e-commerce logistics solutions 
                  to help your business scale efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}