import Link from 'next/link';
import Image from 'next/image';

export default  function TruckDispatchingPage() {
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

  const requirements = [
    'Valid CDL (Class A, B, or C)',
    'Commercial truck insurance',
    'DOT number and MC authority',
    'Clean driving record',
    'Reliable truck and trailer',
    'Smartphone for tracking and communication'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assests/10050.jpeg"
            alt="Truck Dispatching Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Truck Dispatching Solutions
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                All-in-one dispatching service including load finding, route planning, and billing & invoicing. We handle everything so you can focus on driving and maximizing your profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:simbadispatchservices@gmail.com"
                  className="bg-white text-gray-800 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Contact for Discussion
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-800 transition-colors text-center"
                >
                  Send Query
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🚛</div>
              <p className="text-gray-100">Professional Dispatch Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All-in-One Dispatching Package
            </h2>
            <p className="text-xl text-gray-600">
              Load Finding + Route Planning + Billing & Invoicing - Everything you need in one comprehensive service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Dispatch Service?
            </h2>
            <p className="text-xl text-gray-600">
              Proven results that help owner-operators succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
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
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We only succeed when you succeed
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-green-600 mb-2">Flexible %</div>
            <div className="text-lg text-gray-900 mb-4">Commission per load</div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• No upfront fees</p>
              <p>• No monthly charges</p>
              <p>• Pay only when you get paid</p>
              <p>• Contact for discussion on %</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I get started?
              </h3>
              <p className="text-gray-600">
                Simply register as a truck operator on our platform, complete your profile with truck specifications and credentials, and our dispatch team will start finding loads for you within 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What types of loads do you handle?
              </h3>
              <p className="text-gray-600">
                We handle all types of freight including dry van, refrigerated, flatbed, and specialized loads. Our network includes both LTL and FTL opportunities across all 50 states.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly do I get paid?
              </h3>
              <p className="text-gray-600">
                We offer quick pay options with payments processed within 24-48 hours of load completion. Standard payment terms are also available based on customer requirements.
              </p>
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
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Maximize Your Earnings?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to discuss how we can help optimize your trucking operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:simbadispatchservices@gmail.com"
              className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Email Us Directly
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


 