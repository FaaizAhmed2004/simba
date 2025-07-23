'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronDownIcon, 
  ChevronUpIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  TruckIcon,
  ArchiveBoxIcon,
  BuildingStorefrontIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'general-1',
    question: 'What is Simba Dispatch LLC?',
    answer: 'Simba Dispatch LLC is a modern logistics company based in Baltimore, MD, specializing in FBA prep services, FBM fulfillment, freight shipping, and pallet storage. We help businesses of all sizes streamline their supply chain operations with reliable, cost-effective solutions.',
    category: 'General'
  },
  {
    id: 'general-2',
    question: 'Where are you located?',
    answer: 'Our main fulfillment center and headquarters are located in Baltimore, Maryland. This strategic location allows us to efficiently serve customers across the United States with fast shipping times to major population centers.',
    category: 'General'
  },
  {
    id: 'general-3',
    question: 'What areas do you serve?',
    answer: 'We serve customers nationwide across the United States. Our Baltimore location provides excellent access to major shipping routes, allowing us to offer competitive shipping rates and fast delivery times to all 50 states.',
    category: 'General'
  },
  {
    id: 'general-4',
    question: 'How do I get started with Simba Dispatch LLC?',
    answer: 'Getting started is easy! Simply contact us through our website, phone, or email to discuss your needs. We\'ll provide a custom quote and help you set up your account. Our team will guide you through the onboarding process step by step.',
    category: 'General'
  },

  // FBA Prep Services
  {
    id: 'fba-1',
    question: 'What is FBA prep and why do I need it?',
    answer: 'FBA (Fulfillment by Amazon) prep involves preparing your products according to Amazon\'s strict requirements before sending them to Amazon warehouses. This includes proper labeling, packaging, and quality checks. Proper FBA prep prevents delays, additional fees, and potential account issues.',
    category: 'FBA Prep'
  },
  {
    id: 'fba-2',
    question: 'What FBA prep services do you offer?',
    answer: 'We offer comprehensive FBA prep services including: receiving and inspection, FNSKU labeling, repackaging, bubble wrapping, poly bagging, bundling, quality control checks, and inventory management. We handle everything needed to get your products Amazon-ready.',
    category: 'FBA Prep'
  },
  {
    id: 'fba-3',
    question: 'How much does FBA prep cost?',
    answer: 'Our FBA prep services start at $0.45 per unit for basic prep. Additional services like custom labeling ($0.15/unit), bubble wrap ($0.10/unit), and poly bagging ($0.08/unit) are available. We provide transparent pricing with no hidden fees.',
    category: 'FBA Prep'
  },
  {
    id: 'fba-4',
    question: 'How long does FBA prep take?',
    answer: 'Most FBA prep orders are completed within 1-3 business days of receiving your inventory. Complex prep work or large volumes may take longer. We provide tracking updates throughout the process so you always know the status of your inventory.',
    category: 'FBA Prep'
  },
  {
    id: 'fba-5',
    question: 'Do you handle hazmat or restricted products?',
    answer: 'We can handle many types of products, but hazmat and certain restricted items require special handling. Please contact us with details about your specific products so we can determine if we can accommodate your needs and any additional requirements.',
    category: 'FBA Prep'
  },

  // FBM Fulfillment
  {
    id: 'fbm-1',
    question: 'What\'s the difference between FBA and FBM?',
    answer: 'FBA (Fulfillment by Amazon) means Amazon handles storage and shipping, while FBM (Fulfillment by Merchant) means you handle fulfillment yourself. Our FBM service gives you the control of merchant fulfillment with professional logistics support.',
    category: 'FBM Fulfillment'
  },
  {
    id: 'fbm-2',
    question: 'How quickly do you process FBM orders?',
    answer: 'Orders received before 2 PM EST are typically processed and shipped the same day. Orders received after 2 PM are processed the next business day. We provide real-time tracking information for all shipments.',
    category: 'FBM Fulfillment'
  },
  {
    id: 'fbm-3',
    question: 'What are your FBM fulfillment rates?',
    answer: 'Our FBM fulfillment is priced by package weight: 1-5 lbs ($2.00), 6-10 lbs ($2.50), 11-15 lbs ($3.00), 16-20 lbs ($3.50), 21-25 lbs ($4.00). This includes pick, pack, ship, tracking, and customer notifications.',
    category: 'FBM Fulfillment'
  },
  {
    id: 'fbm-4',
    question: 'Can you integrate with my e-commerce platform?',
    answer: 'Yes! We can integrate with most major e-commerce platforms including Shopify, WooCommerce, BigCommerce, and others. We also accept orders via API, CSV upload, or manual entry. Our team will help set up the integration that works best for you.',
    category: 'FBM Fulfillment'
  },
  {
    id: 'fbm-5',
    question: 'Do you handle returns for FBM orders?',
    answer: 'Yes, we provide complete returns management including receiving returned items, inspection, restocking (when appropriate), and customer communication. Returns processing fees apply based on the complexity of the return.',
    category: 'FBM Fulfillment'
  },

  // Support & Service
  {
    id: 'support-1',
    question: 'What are your business hours?',
    answer: 'Our business hours are Monday-Friday 8:00 AM to 6:00 PM EST, and Saturday 9:00 AM to 2:00 PM EST. We\'re closed on Sundays. For urgent matters outside business hours, please call our main number and leave a detailed message.',
    category: 'Support'
  },
  {
    id: 'support-2',
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly at 1.410.831.1883 for immediate assistance.',
    category: 'Support'
  },
  {
    id: 'support-3',
    question: 'Do you provide tracking information?',
    answer: 'Yes, we provide comprehensive tracking information for all shipments. You\'ll receive tracking numbers and can monitor your shipments in real-time. We also send proactive updates about any delays or issues.',
    category: 'Support'
  },
  {
    id: 'support-4',
    question: 'What if there\'s a problem with my shipment?',
    answer: 'If there\'s any issue with your shipment, contact us immediately. We have a dedicated customer service team that will investigate and resolve problems quickly. We stand behind our service and will make things right.',
    category: 'Support'
  }
];

const categories = [
  { name: 'All', icon: QuestionMarkCircleIcon, count: faqData.length },
  { name: 'General', icon: QuestionMarkCircleIcon, count: faqData.filter(faq => faq.category === 'General').length },
  { name: 'FBA Prep', icon: ArchiveBoxIcon, count: faqData.filter(faq => faq.category === 'FBA Prep').length },
  { name: 'FBM Fulfillment', icon: TruckIcon, count: faqData.filter(faq => faq.category === 'FBM Fulfillment').length },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assests/10055.jpeg"
            alt="FAQ and customer support"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our logistics services
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <category.icon className="h-5 w-5 mr-2" />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
              <p className="text-blue-100 mb-4">
                Cant find what you are looking for? Our team is here to help.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <QuestionMarkCircleIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or selecting a different category.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-md">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">
                          {faq.category}
                        </span>
                      </div>
                      {openItems.includes(faq.id) ? (
                        <ChevronUpIcon className="h-5 w-5 text-gray-500 ml-4" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-gray-500 ml-4" />
                      )}
                    </button>
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have more questions or ready to begin? We are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}