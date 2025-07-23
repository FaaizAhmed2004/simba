import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Truck Dispatching',
      description: 'Professional truck dispatching services for owner-operators with 24/7 support.',
      features: [
        'Load finding and booking',
        'Route optimization',
        '24/7 dispatch support',
        'Competitive rates',
        'Professional communication'
      ],
      pricing: 'Flexible % - Contact for Discussion',
      href: '/services/truck-dispatching',
      icon: '🚛'
    },
    {
      title: 'FBA Prep Services',
      description: 'Complete Amazon FBA preparation including receiving, labeling, and shipment to Amazon.',
      features: [
        'Product receiving & inspection',
        'FNSKU labeling',
        'Quality assurance',
        'Amazon warehouse shipment',
        'Photo documentation'
      ],
      pricing: 'Starting at $0.25 USDT/unit',
      href: '/services/fba-prep',
      icon: '📦'
    },
    {
      title: 'FBM Fulfillment',
      description: 'Professional fulfillment by merchant services with same-day processing.',
      features: [
        'Order processing',
        'Pick & pack services',
        'Direct-to-customer shipping',
        'Multi-channel support',
        'Real-time tracking'
      ],
      pricing: 'Starting at $0.25 USDT/order',
      href: '/services/fbm-fulfillment',
      icon: '🛒'
    },
    {
      title: 'Load Finding',
      description: 'Find profitable loads that match your truck specifications and route preferences.',
      features: [
        'High-paying load matching',
        'Route-specific searches',
        'Load verification',
        'Quick booking process',
        'Negotiation support'
      ],
      pricing: 'Included in Dispatching',
      href: '/services/load-finding',
      icon: '🎯'
    },
    {
      title: 'Route Planning',
      description: 'Optimize your routes for maximum efficiency, reduced fuel costs, and improved delivery times.',
      features: [
        'Fuel cost optimization',
        'Time-efficient routing',
        'Traffic pattern analysis',
        'Weather considerations',
        'Rest stop planning'
      ],
      pricing: 'Included in Service',
      href: '/services/route-planning',
      icon: '🗺️'
    },
    {
      title: 'Billing & Invoicing',
      description: 'Professional billing services with timely invoicing and payment tracking.',
      features: [
        'Quick invoicing',
        'Payment tracking',
        'Financial reporting',
        'Dispute resolution',
        'Account management'
      ],
      pricing: 'Included in Service',
      href: '/services/billing-invoicing',
      icon: '💳'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Comprehensive Logistics Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              From truck dispatching to Amazon fulfillment, we provide complete logistics solutions to help your business grow and succeed
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={service.href}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/quote"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-md hover:bg-blue-50 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Maximize Your Earnings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Simba Dispatch Services LLC today and let our professional dispatching team help you find the best loads and optimize your trucking operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:simbadispatchservices@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Email Us Directly
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}