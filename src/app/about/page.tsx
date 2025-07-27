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
    year: '2022',
    title: 'The Beginning: Truck Dispatching Excellence',
    description: 'Founded in Orlando, FL with a mission to transform truck dispatching. We started by partnering with independent owner-operators and small fleets, providing 24/7 dispatch support, load optimization, and back-office coordination. Our focus was simple: maximize driver revenue while minimizing their administrative burden.'
  },
  {
    year: '2022-2023',
    title: 'Operational Excellence & Growth',
    description: 'Expanded our dispatch operations nationwide, building strong relationships with freight brokers and shippers. We developed proprietary route optimization systems and implemented advanced load matching technology. Our dispatch team grew to handle hundreds of loads weekly, consistently securing premium rates for our drivers.'
  },
  {
    year: '2023',
    title: '3PL Services Launch',
    description: 'Recognizing the growing e-commerce market, we expanded into comprehensive 3PL services. We established partnerships with Amazon FBA sellers, offering prep services, inventory management, and fulfillment solutions. Our warehouse operations began handling thousands of units monthly, from receiving to final mile delivery.'
  },
  {
    year: '2023-2024',
    title: 'Technology Integration & Automation',
    description: 'Deployed cutting-edge logistics management systems integrating dispatch operations with 3PL services. Implemented real-time tracking, automated inventory management, and AI-powered load matching. Our technology platform now serves as the backbone for both trucking and fulfillment operations.'
  },
  {
    year: '2024',
    title: 'Full-Service Logistics Provider',
    description: 'Achieved our vision of becoming a complete logistics solution. Today we seamlessly integrate truck dispatching with 3PL services, offering end-to-end supply chain management. From the moment freight is picked up to final delivery, we handle every aspect of the logistics journey.'
  },
  {
    year: 'Future',
    title: 'Nationwide Expansion & Innovation',
    description: 'Planning strategic expansion across major logistics hubs in the USA. Investing in advanced warehouse automation, expanding our carrier network, and developing next-generation logistics technology. Our goal: to become the most trusted name in integrated dispatch and 3PL services nationwide.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text- reblacklative">
      {/* Logo Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="opacity-5">
          <Image
            src="/simbaDispatch.png"
            alt="Simba Dispatch Services Logo Background"
            width={800}
            height={600}
            className="fill"
            priority
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-black  bg-white">
          {/* Background Image */}
          {/* <div className="absolute inset-0">
            <Image
              src="/simbaDispatch.png"
              alt="Simba Dispatch Services Background"
              fill
              className="object-contain "
              priority
            />
          </div> */}

          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Text Content */}
              <div className="text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
                  About Simba Dispatch Services LLC
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                  A Professional 3PL and Dispatch services provider, built for the modern business.
                  We are here to simplify and accelerate your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link
                    href="/services"
                    className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Right Side - Logo */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-200 max-w-md w-full">
                  <Image
                    src="/simbaDispatch.png"
                    alt="Simba Dispatch Services Logo"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="relative pb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Our Story Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Simba Dispatch Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our journey from a simple truck dispatching company to a comprehensive logistics partner
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 mb-12 border border-gray-600">
                <p className="text-lg text-gray-200 leading-relaxed">
                  At Simba Dispatch Services, our journey began in 2022 with a simple goal: to make life easier and more profitable for truck dispatch and 3pl services across the country. What started as a truck dispatch and 3pl service provider quickly evolved into something much greater—thanks to the hard work of our team, the loyalty of our clients, and a shared commitment to growth.
                </p>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Beginnings: Dispatching with Purpose</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      We started by offering dispatching services to owner-operators and small trucking fleets, helping them navigate the complexities of freight booking, rate negotiations, paperwork, and DOT compliance. In an industry where time is money, we made sure our clients could focus on driving—while we handled the back-end operations.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Over time, we built strong relationships with carriers and brokers alike, consistently securing high-paying loads, optimizing routes, and providing 24/7 support. Our dispatchers became trusted partners—dedicated, reliable, and always working in the best interest of our drivers.
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Growing with Our Clients</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      As our trucking clients expanded their operations, they began looking for more than just dispatch support. They needed a logistics partner who could keep up with their growth—and that&rsquo;s exactly what we became.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      By 2023, Simba Dispatch Services had evolved into a full-service logistics and 3PL (Third-Party Logistics) provider, offering scalable solutions that go beyond dispatching. We saw the rise of e-commerce and the growing demand for Amazon FBA and FBM fulfillment—and we responded.
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-600 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">2022</div>
                      <p className="text-sm text-gray-300">Founded</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-600 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                      <p className="text-sm text-gray-300">Support</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-600 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">48</div>
                      <p className="text-sm text-gray-300">States</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-600 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                      <p className="text-sm text-gray-300">Dedicated</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Expanded Services: More Than Just Dispatching</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Today, our services include comprehensive solutions for both trucking and e-commerce businesses:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                      <h4 className="text-xl font-bold text-blue-400 mb-4">Truck Dispatching Services</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          Load sourcing and rate negotiation
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          24/7 support and communication
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          Driver management and back-office coordination
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
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

                  <p className="text-lg text-gray-300 leading-relaxed mt-8">
                    Whether you&#39;re an independent driver, a growing fleet, or an Amazon seller managing hundreds of SKUs, Simba Dispatch Services provides reliable, cost-effective solutions that keep your business running smoothly.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Join the Simba Dispatch Services Family Today</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you&#39;re hauling freight or fulfilling e-commerce orders, we&#39;re here to make your business run better.
                  Experience the difference of working with a logistics partner that truly understands your needs and is committed to your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Link
                    href="/quote"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
                  >
                    Contact Us
                  </Link>
                </div>
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
                  To empower logistics businesses—small and large—with dependable, streamlined, and cost-efficient solutions that drive long-term growth and success.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be one of the most trusted names in trucking dispatch, 3PL, and fulfillment logistics by always putting our clients first and staying ahead of industry trends and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                These values guide every decision we make and every service we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 sm:p-8 text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
                Our Journey: From Dispatch to Full-Service 3PL
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                What started as a simple truck dispatching service has evolved into a comprehensive logistics powerhouse. Here is the story of how we built an integrated dispatch and 3PL operation that serves truckers and e-commerce businesses nationwide.
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our operations span from Orlando, FL headquarters to nationwide coverage, handling everything from single-truck dispatch to multi-million dollar e-commerce fulfillment contracts. We&apos;ve processed over 10,000 loads, managed millions of inventory units, and built lasting partnerships with carriers, brokers, and Amazon sellers across America.
                </p>
              </div>
            </div>

            {/* Operations Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-white font-semibold mb-2">Dispatch Operations</div>
                <div className="text-gray-400 text-sm">Round-the-clock support for our trucking partners</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                <div className="text-white font-semibold mb-2">Units Processed</div>
                <div className="text-gray-400 text-sm">Monthly 3PL fulfillment capacity</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-white font-semibold mb-2">Active Partners</div>
                <div className="text-gray-400 text-sm">Truckers and e-commerce businesses served</div>
              </div>
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

            {/* Current Operations Story */}
            <div className="mt-20 max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Today: Integrated Logistics Excellence
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-3">Truck Dispatching Operations</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our dispatch center operates 24/7 from Orlando, managing hundreds of trucks across all 48 states. We specialize in dry van, refrigerated, and flatbed loads, with dedicated teams for each segment. Our dispatchers average 15+ years of industry experience and maintain direct relationships with over 1,000 freight brokers and shippers.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-3">Advanced Load Matching</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Using proprietary algorithms and real-time market data, we optimize routes and maximize revenue per mile. Our system analyzes fuel costs, traffic patterns, and market rates to secure the most profitable loads while minimizing deadhead miles.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-3">3PL & Fulfillment Operations</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our 50,000+ sq ft fulfillment centers handle everything from Amazon FBA prep to direct-to-consumer shipping. We process thousands of units daily, offering services like labeling, bundling, quality control, and custom packaging. Our team manages inventory for over 200 active Amazon sellers.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-3">Technology Integration</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our custom-built platform integrates dispatch and 3PL operations, providing real-time visibility across the entire supply chain. From load tracking to inventory management, our technology ensures seamless coordination between trucking and fulfillment services.
                      </p>
                    </div>
                  </div>
                </div>
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
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Simba Dispatch?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We&apos;ve built our reputation on delivering results and building lasting partnerships with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-sm text-gray-300">
                  We&apos;ve helped dozens of carriers scale from single-truck operations to multi-fleet businesses.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Customized Solutions</h3>
                <p className="text-sm text-gray-300">
                  No two clients are the same. We tailor our services to fit your exact needs.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 text-center">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Transparent Communication</h3>
                <p className="text-sm text-gray-300">
                  We believe in honesty, clarity, and being available when you need us.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 p-6 text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Experienced Team</h3>
                <p className="text-sm text-gray-300">
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
    </div>
  );
}