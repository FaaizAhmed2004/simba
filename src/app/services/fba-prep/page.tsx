import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CubeIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'FBA Prep Services - Amazon FBA Preparation | Simba Dispatch LLC',
  description: 'Professional Amazon FBA prep services including receiving, inspection, labeling, and shipment to Amazon warehouses. Get your products FBA-ready with Simba Dispatch LLC.',
  keywords: 'FBA prep, Amazon FBA preparation, FNSKU labeling, FBA inspection, Amazon warehouse prep, FBA services',
};

const features = [
  {
    icon: CubeIcon,
    title: 'Product Receiving & Inspection',
    description: 'We receive your products and conduct thorough quality inspections to ensure they meet Amazon&apos;s standards.'
  },
  {
    icon: CheckCircleIcon,
    title: 'FNSKU Labeling',
    description: 'Professional FNSKU label application with precision placement and high-quality materials.'
  },
  {
    icon: TruckIcon,
    title: 'Amazon Warehouse Shipment',
    description: 'Direct shipment to Amazon fulfillment centers with proper documentation and tracking.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Multi-point quality checks to prevent returns and ensure customer satisfaction.'
  }
];

const pricingTiers = [
  {
    name: 'Basic FBA Prep',
    price: '$0.25',
    unit: 'USDT per unit',
    features: [
      'Product receiving',
      'Basic inspection',
      'FNSKU labeling',
      'Standard packaging',
      'Amazon shipment'
    ]
  },
  {
    name: 'Premium FBA Prep',
    price: '$0.35',
    unit: 'USDT per unit',
    features: [
      'Everything in Basic',
      'Detailed quality inspection',
      'Custom packaging',
      'Photo documentation',
      'Priority processing',
      'Expedited shipping'
    ],
    popular: true
  },
  {
    name: 'Custom FBA Solutions',
    price: 'Custom',
    unit: 'USDT quote',
    features: [
      'Tailored prep services',
      'Bulk processing discounts',
      'Custom labeling solutions',
      'Dedicated account manager',
      'SLA guarantees'
    ]
  }
];

const process = [
  {
    step: '01',
    title: 'Send Your Products',
    description: 'Ship your products to our secure facility with provided shipping labels.'
  },
  {
    step: '02',
    title: 'Receiving & Inspection',
    description: 'We receive, count, and inspect each item for quality and compliance.'
  },
  {
    step: '03',
    title: 'FBA Preparation',
    description: 'FNSKU labeling, packaging, and preparation according to Amazon requirements.'
  },
  {
    step: '04',
    title: 'Ship to Amazon',
    description: 'Direct shipment to Amazon fulfillment centers with tracking information.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Professional service with excellent communication. They handle our FBA prep so we can focus on growing our business. Highly recommended!'
  }
];

export default function FBAPrepPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/assests/10050.jpeg"
            alt="FBA Prep Services Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Professional FBA Prep Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-2xl lg:max-w-none">
                Get your products Amazon-ready with our comprehensive FBA preparation services.
                From receiving to shipment, we handle everything so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                >
                  Get Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete FBA Preparation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive FBA prep services ensure your products meet Amazon&apos;s requirements
              and reach customers quickly and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assests/10016.jpeg"
                  alt="FBA Prep Warehouse Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our FBA Prep Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and reliable. Here&apos;s how we get your products FBA-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/assests/10018.jpeg"
              alt="FBA Prep Process - Professional Amazon preparation workflow"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Professional FBA Preparation</h3>
                <p className="text-lg">From receiving to Amazon delivery - we handle it all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent FBA Prep Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the FBA prep service that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg p-6 sm:p-8 ${tier.popular ? 'ring-2 ring-gray-800 md:transform md:scale-105' : ''
                }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-1">{tier.price}</div>
                  <div className="text-gray-600">{tier.unit}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${tier.popular
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assests/10054.jpeg"
            alt="FBA Prep CTA Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your FBA Process?
          </h2>
          <p className="text-xl mb-8">
            Get started with professional FBA prep services today. Fast, reliable, and cost-effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Free Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}