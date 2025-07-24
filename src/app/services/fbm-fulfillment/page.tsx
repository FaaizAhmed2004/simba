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
  title: 'FBM Fulfillment Services - Fulfillment by Merchant | Simba Dispatch Services LLC',
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            src="/FBM-pre.mp4"
          ></video>
        </div>
        <div className="absolute inset-0 bg-black opacity-60">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Professional FBM Fulfillment Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed text-gray-300">
                Scale your Amazon FBM business with our comprehensive fulfillment services.
                From order processing to customer delivery, we handle it all with precision and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-lg border border-gray-700 transform hover:scale-105 duration-300"
                >
                  Get Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors transform hover:scale-105 duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Similar to home page */}
        <div className="relative mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Order Processing</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
                <div className="text-gray-300">Fulfillment Accuracy</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">FBM Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete FBM Fulfillment Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive FBM fulfillment services help you deliver exceptional customer experiences
              while reducing costs and improving efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full shadow-lg">
                    <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                <Image
                  src="/assests/10055.jpeg"
                  alt="FBM Fulfillment Center Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0  bg-opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons2" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our FBM Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of professional FBM fulfillment with our proven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons3" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons3)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our FBM Fulfillment Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamlined, efficient, and reliable. Here&apos;s how we fulfill your orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-500/10 text-blue-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
            <Image
              src="/assests/10053.jpeg"
              alt="FBM Fulfillment Process - Professional order fulfillment workflow"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Professional FBM Fulfillment</h3>
                <p className="text-lg text-gray-300">From order to delivery - seamless fulfillment process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons4" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons4)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent FBM Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the FBM fulfillment plan that fits your business volume and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 sm:p-8 ${tier.popular ? 'ring-2 ring-blue-400 md:transform md:scale-105' : ''
                } transform hover:scale-[1.02] transition-all duration-300`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${tier.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
                      : 'bg-black border border-gray-700 text-white hover:bg-gray-800 transform hover:scale-105'
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
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons5" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons5)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from satisfied clients who have scaled their FBM business with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="/assests/10054.jpeg"
            alt="FBM Fulfillment CTA Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your FBM Business?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get started with professional FBM fulfillment services today. Fast, reliable, and cost-effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-lg border border-gray-700 transform hover:scale-105 duration-300"
            >
              Get Free Quote
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors transform hover:scale-105 duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}