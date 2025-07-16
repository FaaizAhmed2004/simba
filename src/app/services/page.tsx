import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'FBA Prep Services',
      description: 'Complete Amazon FBA preparation and fulfillment services to get your products ready for Amazon warehouses.',
      features: [
        'Receiving and inspection',
        'FNSKU labeling and application',
        'Repackaging and bundling',
        'Quality control checks',
        'Inventory management'
      ],
      pricing: 'Starting at $0.45/unit',
      href: '/services/fba-prep',
      icon: '📦'
    },
    {
      title: 'FBM Fulfillment',
      description: 'Direct-to-customer fulfillment services for merchants who want to handle their own shipping.',
      features: [
        'Order processing',
        'Pick and pack services',
        'Direct shipping to customers',
        'Weight-based pricing',
        'Fast turnaround times'
      ],
      pricing: 'Starting at $2.00/package',
      href: '/services/fbm-fulfillment',
      icon: '🚚'
    },
    {
      title: 'Freight Shipping',
      description: 'Comprehensive freight transportation solutions for businesses of all sizes across the USA.',
      features: [
        'Less-than-truckload (LTL)',
        'Full truckload (FTL)',
        'Expedited shipping',
        'Nationwide coverage',
        'Real-time tracking'
      ],
      pricing: 'Competitive rates',
      href: '/services/freight-shipping',
      icon: '🚛'
    },
    {
      title: 'Truck Dispatching',
      description: 'Professional dispatching services connecting truck operators with profitable loads.',
      features: [
        'Load matching and assignment',
        'Route optimization',
        '24/7 dispatch support',
        'Paperwork handling',
        'Performance tracking'
      ],
      pricing: 'Commission-based',
      href: '/services/truck-dispatching',
      icon: '📱'
    },
    {
      title: 'Pallet Storage',
      description: 'Secure, climate-controlled warehouse storage solutions for your inventory needs.',
      features: [
        'Climate-controlled facilities',
        'Flexible storage terms',
        'Easy access and retrieval',
        'Inventory management',
        'Security monitoring'
      ],
      pricing: '$25/pallet/week',
      href: '/services/pallet-storage',
      icon: '🏢'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Logistics Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive shipping and logistics solutions designed to streamline your business operations across the USA
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
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with Simba Logistics today and experience the difference professional logistics services can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}