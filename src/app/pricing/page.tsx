import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckIcon, 
  TruckIcon, 
  ArchiveBoxIcon, 
  BuildingStorefrontIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Pricing - Simba Dispatch LLC',
  description: 'Transparent pricing for FBA prep, FBM fulfillment, freight shipping, and storage services. Get competitive rates for all your logistics needs.',
  keywords: 'logistics pricing, shipping rates, FBA prep costs, freight shipping prices, fulfillment pricing',
};

const pricingPlans = [
  {
    name: 'FBA Prep Services',
    icon: ArchiveBoxIcon,
    description: 'Amazon FBA preparation and fulfillment services',
    basePrice: '$0.45',
    unit: 'per unit',
    features: [
      'Receiving and inspection',
      'FNSKU labeling',
      'Repackaging services',
      'Quality control checks',
      'Inventory management',
      'Fast processing times'
    ],
    additionalServices: [
      { name: 'Custom labeling', price: '$0.15/unit' },
      { name: 'Bubble wrap', price: '$0.10/unit' },
      { name: 'Poly bagging', price: '$0.08/unit' },
      { name: 'Bundling services', price: '$0.25/unit' }
    ],
    popular: true
  },
  {
    name: 'FBM Fulfillment',
    icon: TruckIcon,
    description: 'Fulfillment by Merchant shipping services',
    basePrice: '$2.00',
    unit: 'per package',
    features: [
      'Direct-to-customer shipping',
      'Weight-based pricing',
      'Fast processing',
      'Order tracking',
      'Returns processing',
      'Customer support'
    ],
    additionalServices: [
      { name: 'Same-day processing', price: '$1.00/package' },
      { name: 'Gift wrapping', price: '$2.50/package' },
      { name: 'Custom packaging', price: '$1.50/package' },
      { name: 'Signature required', price: '$3.00/package' }
    ],
    popular: false
  },
  {
    name: 'Freight Shipping',
    icon: BuildingStorefrontIcon,
    description: 'LTL and FTL freight transportation',
    basePrice: 'Custom',
    unit: 'quote',
    features: [
      'Less-than-truckload (LTL)',
      'Full truckload (FTL)',
      'Nationwide coverage',
      'Competitive rates',
      'Real-time tracking',
      'Dedicated support'
    ],
    additionalServices: [
      { name: 'Liftgate service', price: '$75/shipment' },
      { name: 'Inside delivery', price: '$125/shipment' },
      { name: 'Residential delivery', price: '$85/shipment' },
      { name: 'Appointment delivery', price: '$45/shipment' }
    ],
    popular: false
  },
  {
    name: 'Pallet Storage',
    icon: CubeIcon,
    description: 'Secure warehouse storage solutions',
    basePrice: '$25',
    unit: 'per pallet/week',
    features: [
      'Climate-controlled facilities',
      'Flexible storage terms',
      'Easy access and retrieval',
      '24/7 security monitoring',
      'Inventory management',
      'Monthly reporting'
    ],
    additionalServices: [
      { name: 'Pallet handling', price: '$15/pallet' },
      { name: 'Inventory counts', price: '$25/month' },
      { name: 'Photo documentation', price: '$5/pallet' },
      { name: 'Rush retrieval', price: '$35/pallet' }
    ],
    popular: false
  }
];

const faqs = [
  {
    question: 'How is pricing calculated?',
    answer: 'Our pricing is transparent and based on the specific services you need. FBA prep is charged per unit, FBM fulfillment per package, storage per pallet per week, and freight shipping is quoted based on weight, distance, and service requirements.'
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No, we don\'t charge setup fees. You only pay for the services you use. We believe in transparent pricing without hidden costs.'
  },
  {
    question: 'Do you offer volume discounts?',
    answer: 'Yes, we offer competitive volume discounts for high-volume customers. Contact us to discuss custom pricing based on your shipping volume and requirements.'
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including net 30 for qualified businesses. New customers typically start with payment upon service completion or prepaid accounts.'
  },
  {
    question: 'Can I get a custom quote?',
    answer: 'Absolutely! Every business has unique needs. Use our quote form or contact us directly for personalized pricing based on your specific requirements.'
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assests/10054.jpeg"
            alt="Logistics pricing and services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            No hidden fees, no surprises. Pay only for the services you need with competitive rates.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our comprehensive logistics services with transparent, competitive pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <plan.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-gray-900">
                    {plan.basePrice}
                    <span className="text-lg font-normal text-gray-600">/{plan.unit}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Additional Services:</h4>
                  <ul className="space-y-1">
                    {plan.additionalServices.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between text-sm">
                        <span className="text-gray-600">{service.name}</span>
                        <span className="text-gray-900 font-medium">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Simba Dispatch LLC?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional value with transparent pricing and reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no setup fees or hidden charges. You only pay for what you use.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick processing times and reliable delivery with real-time tracking and updates.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BuildingStorefrontIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                From small businesses to enterprise clients, our solutions scale with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized quote for your logistics needs in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}