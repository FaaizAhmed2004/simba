import Link from 'next/link';

export default function TruckDispatchingPage() {
  const services = [
    {
      title: 'Load Finding & Matching',
      description: 'Find profitable loads that match your truck specifications and route preferences. High-paying load matching with route-specific searches and quick booking process.',
      icon: '🎯'
    },
    {
      title: 'Route Planning & Optimization',
      description: 'Optimize your routes for maximum efficiency, reduced fuel costs, and improved delivery times. Fuel cost optimization, time-efficient routing, and traffic pattern analysis.',
      icon: '🗺️'
    },
    {
      title: 'Billing & Invoicing Services',
      description: 'Professional billing services with timely invoicing and payment tracking. Quick invoicing, payment tracking, financial reporting, and dispute resolution.',
      icon: '💳'
    },
    {
      title: '24/7 Dispatch Support',
      description: 'Round-the-clock dispatch support to handle emergencies, route changes, and customer communications.',
      icon: '📞'
    },
    {
      title: 'Real-time Tracking',
      description: 'GPS tracking and real-time updates for complete visibility of load status and location.',
      icon: '📍'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure all loads meet DOT regulations, HOS requirements, and safety standards.',
      icon: '✅'
    }
  ];

  const benefits = [
    {
      title: 'Maximize Revenue',
      description: 'Find the highest-paying loads that match your truck specifications and route preferences.',
      icon: '💰'
    },
    {
      title: 'Reduce Empty Miles',
      description: 'Minimize deadhead miles with strategic load planning and backhaul opportunities.',
      icon: '⛽'
    },
    {
      title: 'Professional Support',
      description: 'Dedicated dispatch team handles customer communications and load coordination.',
      icon: '👥'
    },
    {
      title: 'Flexible Schedule',
      description: 'Choose loads that fit your schedule and preferred operating areas.',
      icon: '📅'
    }
  ];

  // const requirements = [
  //   'Valid CDL (Class A, B, or C)',
  //   'Commercial truck insurance',
  //   'DOT number and MC authority',
  //   'Clean driving record',
  //   'Reliable truck and trailer',
  //   'Smartphone for tracking and communication'
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            src="/trucking.mp4"
          >
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Complete Truck Dispatch Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              All-in-one dispatching service including load finding, route planning, and billing & invoicing. We handle everything so you can focus on driving and maximizing your profits.
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
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Dispatch Support</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Flexible %</div>
                <div className="text-gray-300">Commission Rate</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Satisfied Drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All-in-One Dispatch Package
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Load Finding + Route Planning + Billing & Invoicing - Everything you need in one comprehensive service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Dispatch Service?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results that help owner-operators succeed and maximize their earnings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full shadow-lg">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Requirements to Join
            </h2>
            <p className="text-xl text-gray-600">
              Basic requirements to become part of our dispatch network
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-green-600">✓</div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            We only succeed when you succeed
          </p>

          <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-blue-600 mb-2">Flexible % or Weekly fixed fee</div>
            <div className="text-lg text-gray-900 mb-4">Commission per load</div>
            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>• No upfront fees</p>
              <p>• No monthly charges</p> 
              <p>• Pay only when you get paid</p>
              <p>• Contact for discussion on %</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quote"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="flex-1 text-center bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I choose my own loads?
            </h3>
            <p className="text-gray-600">
              Absolutely! While our dispatch team finds and negotiates loads for you, you always have the final say on which loads to accept based on your preferences and schedule.
            </p>
          </div>
        </div>
      </div>
      */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
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
          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Maximize Your Earnings?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contact us today to discuss how we can help optimize your trucking operations.
                  Join 100+ satisfied drivers who trust Simba Dispatch Services LLC.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="mailto:cs@simbadispatchservices.com"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center border border-gray-700 transform hover:scale-105 duration-300"
                  >
                    Email Us Directly
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center transform hover:scale-105 duration-300"
                  >
                    Send Query
                  </Link>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-black border border-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Free Consultation</div>
                  <div className="text-gray-300">Dispatch Specialists</div>
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


