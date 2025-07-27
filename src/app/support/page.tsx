'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Form interfaces
interface ComplaintFormData {
  name: string;
  email: string;
  serviceType: 'truck-dispatch' | '3pl-services' | 'fba-prep' | 'other' | '';
  complaintCategory: 'service-quality' | 'billing' | 'communication' | 'delivery' | 'other' | '';
  description: string;
  orderNumber: string;
}

interface FeedbackFormData {
  name: string;
  email: string;
  serviceUsed: string;
  rating: 1 | 2 | 3 | 4 | 5 | 0;
  feedbackType: 'compliment' | 'suggestion' | 'general' | '';
  comments: string;
  recommendToOthers: boolean;
}

interface AccountFormData {
  name: string;
  email: string;
  accountNumber: string;
  requestType: 'billing-inquiry' | 'service-modification' | 'account-update' | 'cancellation' | 'other' | '';
  description: string;
  preferredContactMethod: 'email' | 'phone' | '';
}

const supportCategories = [
  {
    id: 'complaint',
    title: 'File a Complaint',
    description: 'Report service issues or concerns that need immediate attention',
    icon: ExclamationTriangleIcon,
    formType: 'complaint' as const,
    responseTime: '24 hours'
  },
  {
    id: 'feedback',
    title: 'Provide Feedback',
    description: 'Share your experience and help us improve our services',
    icon: ChatBubbleLeftRightIcon,
    formType: 'feedback' as const,
    responseTime: '48 hours'
  },
  {
    id: 'account',
    title: 'Account Management',
    description: 'Get help with billing, account updates, or service modifications',
    icon: UserCircleIcon,
    formType: 'account' as const,
    responseTime: '24 hours'
  }
];

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone Support',
    details: '+1 4107555627',
    description: 'Mon-Fri: 8AM-6PM EST',
    urgent: true
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Support',
    details: 'Cs@simbadispatchservices.com',
    description: 'Response within 24 hours',
    urgent: false
  },
  {
    icon: MapPinIcon,
    title: 'Office Location',
    details: 'Orlando, FL',
    description: 'By appointment only',
    urgent: false
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: '8AM - 6PM EST',
    description: 'Monday through Friday',
    urgent: false
  }
];

export default function SupportPage() {
  const [activeForm, setActiveForm] = useState<'complaint' | 'feedback' | 'account' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string; referenceNumber?: string } | null>(null);

  // Form states
  const [complaintForm, setComplaintForm] = useState<ComplaintFormData>({
    name: '', email: '', serviceType: '', complaintCategory: '',
    description: '', orderNumber: ''
  });

  const [feedbackForm, setFeedbackForm] = useState<FeedbackFormData>({
    name: '', email: '', serviceUsed: '', rating: 0, feedbackType: '',
    comments: '', recommendToOthers: false
  });

  const [accountForm, setAccountForm] = useState<AccountFormData>({
    name: '', email: '', accountNumber: '', requestType: '',
    description: '', preferredContactMethod: ''
  });

  const handleFormSubmit = async (formType: 'complaint' | 'feedback' | 'account') => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let response;
      let formData;

      switch (formType) {
        case 'complaint':
          formData = complaintForm;
          response = await fetch('/api/support/complaint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          break;
        case 'feedback':
          formData = feedbackForm;
          response = await fetch('/api/support/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          break;
        case 'account':
          formData = accountForm;
          response = await fetch('/api/support/account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          break;
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: result.message,
          referenceNumber: result.referenceNumber
        });
        // Reset form
        if (formType === 'complaint') {
          setComplaintForm({
            name: '', email: '', serviceType: '', complaintCategory: '',
            description: '', orderNumber: ''
          });
        } else if (formType === 'feedback') {
          setFeedbackForm({
            name: '', email: '', serviceUsed: '', rating: 0, feedbackType: '',
            comments: '', recommendToOthers: false
          });
        } else if (formType === 'account') {
          setAccountForm({
            name: '', email: '', accountNumber: '', requestType: '',
            description: '', preferredContactMethod: ''
          });
        }
      } else {
        setSubmitStatus({
          success: false,
          message: result.error?.message || 'Failed to submit form'
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setActiveForm(null);
    setSubmitStatus(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="support-pattern" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#support-pattern)" />
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24  relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/customer.jpg"
              alt="Customer Support Background"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Customer Support Center
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                We are here to help you with any questions, concerns, or feedback about our truck dispatching and 3PL services.
                Choose the support option that best fits your needs.
              </p>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Need immediate assistance?</strong>
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:urgent@simbadispatch.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Urgent Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Select the type of support you need. All inquiries are handled by our experienced team
                and routed to the appropriate department for fastest resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {supportCategories.map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 p-6 sm:p-8 text-center group hover:border-blue-500">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Response Time:</span>
                      <span className="text-sm text-blue-400 font-semibold">{category.responseTime}</span>
                    </div>

                  </div>
                  <button
                    onClick={() => setActiveForm(category.formType)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Alternative Contact Methods
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Prefer to contact us directly? Here are all the ways you can reach our support team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className={`bg-gray-800 rounded-xl shadow-lg border p-6 text-center ${contact.urgent ? 'border-red-500 bg-red-900/20' : 'border-gray-700'}`}>
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 ${contact.urgent ? 'bg-red-600' : 'bg-blue-600'}`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2">
                    {contact.details}
                  </p>
                  <p className="text-sm text-gray-400">
                    {contact.description}
                  </p>
                  {contact.urgent && (
                    <div className="mt-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        URGENT SUPPORT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions. Can not find what you&apos;re looking for? Use one of our support forms above.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-3">How quickly do you respond to support requests?</h3>
                <p className="text-gray-300">Complaints and account issues: 24 hours. General feedback: 48 hours. Urgent matters: Same day.</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-3">What information should I include in my complaint?</h3>
                <p className="text-gray-300">Please include your account details, service type, order number (if applicable), and a detailed description of the issue.</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-3">Can I track my support request?</h3>
                <p className="text-gray-300">Yes! You will receive a reference number when you submit any support form. Keep this for tracking your request.</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-3">Do you offer 24/7 support?</h3>
                <p className="text-gray-300">Our phone support is available Mon-Fri 8AM-6PM EST. For urgent after-hours issues, use our emergency contact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our customer support team is standing by to assist you with any questions or concerns.
                We&apos;re committed to providing excellent service and resolving your issues quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  General Contact
                </Link>
                <a
                  href="mailto:support@simbadispatch.com"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Forms */}
        {activeForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {activeForm === 'complaint' && 'File a Complaint'}
                    {activeForm === 'feedback' && 'Provide Feedback'}
                    {activeForm === 'account' && 'Account Management'}
                  </h3>
                  <button
                    title='btn'
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg mb-6 ${submitStatus.success ? 'bg-green-900 border border-green-700' : 'bg-red-900 border border-red-700'}`}>
                    <p className={`${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                      {submitStatus.message}
                    </p>
                    {submitStatus.referenceNumber && (
                      <p className="text-green-300 mt-2 font-semibold">
                        Reference Number: {submitStatus.referenceNumber}
                      </p>
                    )}
                  </div>
                )}

                {/* Complaint Form */}
                {activeForm === 'complaint' && (
                  <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('complaint'); }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                        <input
                        aria-label='complaint'
                          type="text"
                          required
                          value={complaintForm.name}
                          onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <input
                          type="email"
                          aria-label='formemal'
                          required
                          value={complaintForm.email}
                          onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Order Number</label>
                      <input
                        aria-label='order no'
                        type="text"
                        value={complaintForm.orderNumber}
                        onChange={(e) => setComplaintForm({ ...complaintForm, orderNumber: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Service Type *</label>
                        <select
                        title='service type'
                          required
                          value={complaintForm.serviceType}
                          onChange={(e) => setComplaintForm({ ...complaintForm, serviceType: e.target.value as ComplaintFormData['serviceType'] })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Select Service</option>
                          <option value="truck-dispatch">Truck Dispatching</option>
                          <option value="3pl-services">3PL Services</option>
                          <option value="fba-prep">FBA Prep</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Complaint Category *</label>
                        <select
                        aria-label='category'
                          required
                          value={complaintForm.complaintCategory}
                          onChange={(e) => setComplaintForm({ ...complaintForm, complaintCategory: e.target.value as ComplaintFormData['complaintCategory'] })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Select Category</option>
                          <option value="service-quality">Service Quality</option>
                          <option value="billing">Billing Issue</option>
                          <option value="communication">Communication</option>
                          <option value="delivery">Delivery Issue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>



                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={complaintForm.description}
                        onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
                        placeholder="Please provide a detailed description of your complaint..."
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {/* Feedback Form */}
                {activeForm === 'feedback' && (
                  <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('feedback'); }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                        <input
                          type="text"
                          aria-label='feedbackform'
                          required
                          value={feedbackForm.name}
                          onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <input
                        aria-label='foam'
                          type="email"
                          required
                          value={feedbackForm.email}
                          onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Used *</label>
                      <input
                        type="text"
                        required
                        value={feedbackForm.serviceUsed}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, serviceUsed: e.target.value })}
                        placeholder="e.g., Truck Dispatching, FBA Prep, 3PL Services"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Rating *</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                          title='star'
                            key={star}
                            type="button"
                            onClick={() => setFeedbackForm({ ...feedbackForm, rating: star as FeedbackFormData['rating'] })}
                            className={`p-1 ${feedbackForm.rating >= star ? 'text-yellow-400' : 'text-gray-600'}`}
                          >
                            <StarIcon className="h-8 w-8 fill-current" />
                          </button>
                        ))}
                        <span className="ml-2 text-gray-300 self-center">
                          {feedbackForm.rating > 0 ? `${feedbackForm.rating}/5 stars` : 'Select rating'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Feedback Type *</label>
                      <select
                      aria-label='type'
                        required
                        value={feedbackForm.feedbackType}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, feedbackType: e.target.value as FeedbackFormData['feedbackType'] })}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Type</option>
                        <option value="compliment">Compliment</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="general">General Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Comments *</label>
                      <textarea
                        required
                        rows={4}
                        value={feedbackForm.comments}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, comments: e.target.value })}
                        placeholder="Please share your feedback..."
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="recommend"
                        checked={feedbackForm.recommendToOthers}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, recommendToOthers: e.target.checked })}
                        className="mr-2"
                      />
                      <label htmlFor="recommend" className="text-gray-300">
                        I would recommend Simba Dispatch Services to others
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {/* Account Management Form */}
                {activeForm === 'account' && (
                  <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('account'); }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                        <input
                        aria-label ="account"
                          type="text"
                          required
                          value={accountForm.name}
                          onChange={(e) => setAccountForm({ ...accountForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <input
                          type="email"
                          aria-label='as'
                          required
                          value={accountForm.email}
                          onChange={(e) => setAccountForm({ ...accountForm, email: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Account Number</label>
                      <input
                        type="text"
                        aria-label='accountNumber'
                        value={accountForm.accountNumber}
                        onChange={(e) => setAccountForm({ ...accountForm, accountNumber: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Request Type *</label>
                      <select
                        aria-label="request"
                        required
                        value={accountForm.requestType}
                        onChange={(e) => setAccountForm({ ...accountForm, requestType: e.target.value as AccountFormData['requestType'] })}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Request Type</option>
                        <option value="billing-inquiry">Billing Inquiry</option>
                        <option value="service-modification">Service Modification</option>
                        <option value="account-update">Account Update</option>
                        <option value="cancellation">Cancellation Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Contact Method *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={accountForm.preferredContactMethod === 'email'}
                            onChange={(e) => setAccountForm({ ...accountForm, preferredContactMethod: e.target.value as AccountFormData['preferredContactMethod'] })}
                            className="mr-2"
                          />
                          <span className="text-gray-300">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={accountForm.preferredContactMethod === 'phone'}
                            onChange={(e) => setAccountForm({ ...accountForm, preferredContactMethod: e.target.value as AccountFormData['preferredContactMethod'] })}
                            className="mr-2"
                          />
                          <span className="text-gray-300">Phone</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Request Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={accountForm.description}
                        onChange={(e) => setAccountForm({ ...accountForm, description: e.target.value })}
                        placeholder="Please describe your account management request..."
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong>Privacy Notice:</strong> For your security, we will verify your identity before making any account changes.
                        Please have your account information ready when we contact you.
                      </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}