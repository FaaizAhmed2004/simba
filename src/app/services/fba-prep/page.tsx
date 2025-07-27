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
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Image */}
      {/* <div className="fixed inset-0 z-0">
        <Image
          src="/fulfil.jpg"
          alt="FBA Fulfillment Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div> */}

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
              src="/fba.mp4"
            >
            </video>
          </div>
          <div className="absolute inset-0 "></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Professional FBA Prep Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-4xl mx-auto">
                Get your products Amazon-ready with our comprehensive FBA preparation services.
                From receiving to shipment, we handle everything so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link
                  href="/quote"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700"
                >
                  Get Instant Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="relative pb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24-48h</div>
                  <div className="text-gray-300">Processing Time</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300">Products Processed Daily</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Complete FBA Preparation Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive FBA prep services ensure your products meet Amazon&apos;s requirements
                and reach customers quickly and safely.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-gray-700">
              <Image
                src="/fulfil.jpg"
                alt="FBA Prep Warehouse Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional FBA Operations</h3>
                  <p className="text-lg">State-of-the-art facility with expert handling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our FBA Prep Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple, efficient, and reliable. Here&apos;s how we get your products FBA-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {process.map((step, index) => (
                <div key={index} className="relative group transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full shadow-lg text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold group-hover:bg-blue-500 transition-colors">
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

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/assests/10018.jpeg"
                alt="FBA Prep Process - Professional Amazon preparation workflow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional FBA Preparation</h3>
                  <p className="text-lg">From receiving to Amazon delivery - we handle it all</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent FBA Prep Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the FBA prep service that fits your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 sm:p-8 ${tier.popular ? 'ring-2 ring-blue-600 md:transform md:scale-105' : ''
                  }`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/quote"
                      className={`flex-1 text-center py-3 px-4 rounded-lg font-semibold transition-colors ${tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold tration-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          {/* Background Pattern */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
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
            <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Streamline Your FBA Process?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Get started with professional FBA prep services today. Fast, reliable, and cost-effective.
                    Join our satisfied clients who trust us with their Amazon success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/quote"
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center border border-gray-700 transform hover:scale-105 duration-300"
                    >
                      Get Free Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center transform hover:scale-105 duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="inline-block bg-black border border-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-400 mb-2">Free Consultation</div>
                    <div className="text-gray-300">FBA Prep Specialists</div>
                    <div className="text-2xl font-bold text-white mt-2">24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}