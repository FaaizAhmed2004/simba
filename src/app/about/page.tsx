import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  GlobeAmericasIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us - Simba Dispatch Service LLC',
  description: 'Learn about Simba  Dispatch Service LLC, a new innovative logistics company in the USA dedicated to providing exceptional shipping, fulfillment, and freight services.',
  keywords: 'about simba dispatch, logistics company USA, shipping services, fulfillment company, freight transportation',
};

const stats = [
  { label: 'Founded', value: '2025' },
  { label: 'Headquarters', value: 'Orlando, FL' },
  { label: 'Services', value: '4+' },
  { label: 'Focus', value: 'Customer Success' }
];

const values = [
  {
    icon: HeartIcon,
    title: 'Customer-Centric',
    description: 'Every decision we make is guided by what\'s best for our customers. Your success is our success.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reliability',
    description: 'We understand that your business depends on us. That\'s why reliability isn\'t just a goal—it\'s our promise.'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Innovation',
    description: 'We leverage the latest technology and best practices to provide cutting-edge logistics solutions.'
  },
  {
    icon: UsersIcon,
    title: 'Partnership',
    description: 'We don\'t just provide services—we build lasting partnerships that help your business grow.'
  }
];


const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Simba Dispatch LLC was established with a vision to revolutionize logistics services for growing businesses.'
  },
  {
    year: '2020',
    title: 'Operations Launch',
    description: 'Launched our truck dispatching services with a focus on reliability and efficiency.'
  },
  {
    year: '2020',
    title: 'Technology Platform',
    description: 'Deployed our modern logistics management platform to streamline operations and enhance customer experience.'
  },
  {
    year: 'Future',
    title: 'Expansion Plans',
    description: 'Planning to expand our network and add more specialized logistics services across the USA.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Simba Dispatch Services LLC
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              A new generation logistics company built for the modern business. 
              We are here to simplify your supply chain and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Simba Dispatch Services LLC was born from a simple observation: growing businesses 
                  need logistics partners who understand their challenges and are agile 
                  enough to adapt to their changing needs.
                </p>
                <p>
                  Founded in 2020, we set out to build a logistics company that combines 
                  the reliability of established players with the innovation and 
                  customer focus that modern businesses deserve.
                </p>
                <p>
                  Based in Orlando, Florida, we are strategically positioned to serve 
                  businesses across the United States with efficient, cost-effective 
                  logistics solutions that scale with your growth.
                </p>
                <p>
                  We believe that logistics should be an enabler of growth, not a 
                  constraint. Thats why we have built our services around flexibility, 
                  transparency, and genuine partnership with our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/assests/10053.jpeg"
                  alt="Simba Dispatch LLC warehouse and operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-blue-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <BuildingOfficeIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Strategic Location</h3>
                    <p className="text-sm text-gray-600">Orlando, FL</p>
                  </div>
                  <div className="text-center">
                    <GlobeAmericasIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">USA Coverage</h3>
                    <p className="text-sm text-gray-600">Serving businesses nationwide</p>
                  </div>
                  <div className="text-center">
                    <CheckCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Quality Focus</h3>
                    <p className="text-sm text-gray-600">Excellence in every shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HeartIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with reliable, innovative logistics solutions 
                that remove barriers to growth. We are committed to being the logistics partner 
                that businesses can depend on to scale efficiently and serve their customers better.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted logistics partner for growing businesses across America, 
                known for our innovation, reliability, and genuine commitment to customer success. 
                We envision a future where logistics enables limitless business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From startup to your trusted 3pl and Dispatch partner - heres our story so far.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success and committed to excellence in logistics.
            </p>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Simba Dispatch Service LLC?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              As a new company, we bring fresh perspectives and innovative solutions to traditional logistics challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Innovation</h3>
              <p className="text-blue-100">
                We leverage the latest technology and best practices without legacy constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Attention</h3>
              <p className="text-blue-100">
                As a growing company, every client matters. You get personalized service and direct access to our team.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
              <p className="text-blue-100">
                Our team brings decades of experience from industry leaders, ensuring reliable service from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing number of businesses that trust Simba Dispatch LLC with their supply chain needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}