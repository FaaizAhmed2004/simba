import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  UsersIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  ShieldCheckIcon,
  CogIcon as Settings
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us - Simba Dispatch Service LLC',
  description: 'Learn about Simba  Dispatch Service LLC, a new innovative logistics company in the USA dedicated to providing exceptional shipping, fulfillment, and freight services.',
  keywords: 'about simba dispatch, logistics company USA, shipping services, fulfillment company, freight transportation',
};

const stats = [
  { label: 'Founded', value: '2022' },
  { label: 'Headquarters', value: 'Orlando, FL' },
  { label: 'Services', value: '6+' },
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/assests/10050.jpeg"
            alt="Logistics and shipping background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              About Simba Dispatch Services LLC
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              A new generation 3PL and Dispatch services provider, built for the modern business.
              We are here to simplify and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/services"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="relative pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Simba Dispatch Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey from a simple truck dispatching company to a comprehensive logistics partner
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Journey Began in 2022</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Simba Dispatch Services, our journey began in 2022 with a simple goal: to make life easier and more profitable for truckers across the country. What started as a truck dispatching company quickly evolved into something much greater—thanks to the hard work of our team, the loyalty of our clients, and a shared commitment to growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Beginnings: Dispatching with Purpose</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We started by offering dispatching services to owner-operators and small trucking fleets, helping them navigate the complexities of freight booking, rate negotiations, paperwork, and DOT compliance. In an industry where time is money, we made sure our clients could focus on driving—while we handled the back-end operations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Over time, we built strong relationships with carriers and brokers alike, consistently securing high-paying loads, optimizing routes, and providing 24/7 support. Our dispatchers became trusted partners—dedicated, reliable, and always working in the best interest of our drivers.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/assests/10053.jpeg"
                  alt="Simba Dispatch Services operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Professional Operations</h3>
                    <p className="text-lg">Serving truckers nationwide since 2022</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2022</div>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Growing with Our Clients</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                As our trucking clients expanded their operations, they began looking for more than just dispatch support. They needed a logistics partner who could keep up with their growth—and that&rsquo;s exactly what we became.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                By 2023, Simba Dispatch Services had evolved into a full-service logistics and 3PL (Third-Party Logistics) provider, offering scalable solutions that go beyond dispatching. We saw the rise of e-commerce and the growing demand for Amazon FBA and FBM fulfillment—and we responded.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expanded Services: More Than Just Dispatching</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Today, our services include comprehensive solutions for both trucking and e-commerce businesses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Truck Dispatching Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Load sourcing and rate negotiation
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      24/7 support and communication
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Driver management and back-office coordination
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h4 className="text-xl font-bold text-white mb-4">3PL Services & E-commerce Fulfillment</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Amazon FBA prep and shipping
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      FBM warehousing and order fulfillment
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Inventory management and last-mile delivery
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mt-8">
                Whether you&#39;re an independent driver, a growing fleet, or an Amazon seller managing hundreds of SKUs, Simba Dispatch Services provides reliable, cost-effective solutions that keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses of all sizes with reliable, innovative logistics solutions
                that remove barriers to growth. We are committed to being the logistics partner
                that businesses can depend on to scale efficiently and serve their customers better.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted logistics partner for growing businesses across America,
                known for our innovation, reliability, and genuine commitment to customer success.
                We envision a future where logistics enables limitless business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 sm:p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to your trusted 3PL and Dispatch partner - here&apos;s our story so far.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 shadow-lg z-10">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Simba Dispatch?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve built our reputation on delivering results and building lasting partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-sm text-gray-600">
                We&apos;ve helped dozens of carriers scale from single-truck operations to multi-fleet businesses.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-sm text-gray-600">
                No two clients are the same. We tailor our services to fit your exact needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Transparent Communication</h3>
              <p className="text-sm text-gray-600">
                We believe in honesty, clarity, and being available when you need us.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Experienced Team</h3>
              <p className="text-sm text-gray-600">
                Our dispatchers, logistics coordinators, and fulfillment experts are trained professionals with real-world experience.
              </p>
            </div>
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
                  Ready to Partner With Us?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join the growing number of businesses that trust Simba Dispatch Services LLC with their supply chain needs.
                  Experience the difference of working with a dedicated logistics partner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center border border-gray-700 transform hover:scale-105 duration-300"
                  >
                    Get a Quote
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
                  <div className="text-gray-300">Orlando, FL Office</div>
                  <div className="text-2xl font-bold text-white mt-2">8AM-5PM EST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}