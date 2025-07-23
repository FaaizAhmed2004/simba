import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCartIcon, 
  CheckCircleIcon, 
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'FBM Fulfillment Services - Fulfillment by Merchant | Simba Dispatch LLC',
  description: 'Professional FBM fulfillment services for Amazon sellers. Fast order processing, pick & pack, and direct-to-customer shipping. Scale your FBM business with Simba Dispatch LLC.',
  keywords: 'FBM fulfillment, fulfillment by merchant, Amazon FBM, order fulfillment, pick and pack, direct shipping',
};

const features = [
  {
    icon: ShoppingCartIcon,
    title: 'Order Processing',
    description: 'Automated order processing with real-time inventory management and order tracking.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Pick & Pack',
    description: 'Professional pick and pack services with quality control and custom packaging options.'
  },
  {
    icon: TruckIcon,
    title: 'Direct Shipping',
    description: 'Fast, reliable shipping directly to your customers with multiple carrier options.'
  },
  {
    icon: GlobeAmericasIcon,
    title: 'Multi-Channel Support',
    description: 'Support for Amazon, eBay, Shopify, and other sales channels from one location.'
  }
];

const pricingTiers = [
  {
    name: 'Starter FBM',
    features: [
      'Order processing',
      'Pick & pack',
      'Standard packaging',
      'Basic shipping options',
      'Order tracking',
      'Up to 100 orders/month'
    ]
  },
  {
    name: 'Professional FBM',
    features: [
      'Everything in Starter',
      'Custom packaging',
      'Expedited shipping',
      'Multi-channel integration',
      'Priority support',
    ],
    popular: true
  },
  {
    name: 'Enterprise FBM',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees',
      'Bulk discounts',
    ]
  }
];

const process = [
  {
    step: '01',
    title: 'Inventory Setup',
    description: 'Send your products to our warehouse and we\'ll set up your inventory system.'
  },
  {
    step: '02',
    title: 'Order Integration',
    description: 'Connect your sales channels for automatic order processing and fulfillment.'
  },
  {
    step: '03',
    title: 'Pick & Pack',
    description: 'Our team picks, packs, and prepares your orders with care and precision.'
  },
  {
    step: '04',
    title: 'Ship & Track',
    description: 'Orders are shipped directly to customers with full tracking information.'
  }
];

const benefits = [
  {
    title: 'Cost Effective',
    description: 'Lower fulfillment costs compared to FBA with transparent pricing.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Faster Processing',
    description: 'Same-day processing for orders received before 2 PM EST.',
    icon: ClockIcon
  },
  {
    title: 'Quality Control',
    description: 'Multi-point quality checks ensure customer satisfaction.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Scalable Solution',
    description: 'Grow your business without worrying about fulfillment capacity.',
    icon: ArrowRightIcon
  }
];

const testimonials = [
  {
    name: 'David Rodriguez',
    rating: 5,
    text: 'Switching to Simba Dispatch for FBM fulfillment was the best decision for our business. Their speed and accuracy have improved our customer satisfaction significantly.'
  },
  {
    name: 'Lisa Thompson',
    rating: 5,
    text: 'Professional service with excellent communication. They handle our multi-channel fulfillment seamlessly, allowing us to focus on marketing and growth.'
  }
];

export default function FBMFulfillmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/assests/10008.webp"
            alt="FBM Fulfillment Services Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Professional FBM Fulfillment Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
                Scale your Amazon FBM business with our comprehensive fulfillment services. 
                From order processing to customer delivery, we handle it all with precision and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                >
                  Get Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-gray-700 transition-colors"
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
              Complete FBM Fulfillment Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive FBM fulfillment services help you deliver exceptional customer experiences 
              while reducing costs and improving efficiency.
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
                  src="/assests/10055.jpeg"
                  alt="FBM Fulfillment Center Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our FBM Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of professional FBM fulfillment with our proven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our FBM Fulfillment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamlined, efficient, and reliable. Here&apos;s how we fulfill your orders.
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
              src="/assests/10053.jpeg"
              alt="FBM Fulfillment Process - Professional order fulfillment workflow"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Professional FBM Fulfillment</h3>
                <p className="text-lg">From order to delivery - seamless fulfillment process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent FBM Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the FBM fulfillment plan that fits your business volume and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg p-6 sm:p-8 ${
                tier.popular ? 'ring-2 ring-blue-600 md:transform md:scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied clients who have scaled their FBM business with our services.
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
            alt="FBM Fulfillment CTA Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your FBM Business?
          </h2>
          <p className="text-xl mb-8">
            Get started with professional FBM fulfillment services today. Fast, reliable, and cost-effective.
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