import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Truck Dispatching',
    description: 'Professional truck dispatching services for owner-operators with 24/7 support.',
    price: 'Flexible % - Contact for Discussion',
    features: ['Load Finding', 'Route Optimization', '24/7 Support', 'Competitive Rates'],
    href: '/services/truck-dispatching',
    image: '/assests/10016.jpeg'
  },
  {
    title: 'FBA Prep Services',
    description: 'Complete Amazon FBA preparation including receiving, labeling, and shipment to Amazon.',
    price: 'Starting at $0.25 USDT/unit',
    features: ['Product Receiving', 'FNSKU Labeling', 'Quality Inspection', 'Amazon Shipment'],
    href: '/services/fba-prep',
    image: '/assests/10018.jpeg'
  },
  {
    title: 'FBM Fulfillment',
    description: 'Professional fulfillment by merchant services with same-day processing.',
    price: 'Starting at $0.25 USDT/order',
    features: ['Order Processing', 'Pick & Pack', 'Direct Shipping', 'Multi-Channel Support'],
    href: '/services/fbm-fulfillment',
    image: '/assests/10050.jpeg'
  },
  {
    title: 'Load Finding',
    description: 'Find profitable loads that match your truck specifications and route preferences.',
    price: 'Included in Dispatching',
    features: ['High-Paying Loads', 'Route Matching', 'Load Verification', 'Quick Booking'],
    href: '/services/load-finding',
    image: '/assests/10008.webp'
  },
  {
    title: 'Route Planning',
    description: 'Optimize your routes for maximum efficiency and reduced fuel costs.',
    price: 'Included in Service',
    features: ['Fuel Optimization', 'Time Efficiency', 'Traffic Avoidance', 'Best Routes'],
    href: '/services/route-planning',
    image: '/assests/10055.jpeg'
  },
  {
    title: 'Billing & Invoicing',
    description: 'Professional billing services with timely invoicing and payment tracking.',
    price: 'Included in Service',
    features: ['Quick Invoicing', 'Payment Tracking', 'Financial Reports', 'Dispute Resolution'],
    href: '/services/billing-invoicing',
    image: '/assests/10050.jpeg'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From truck dispatching to Amazon fulfillment, we provide complete logistics solutions 
            to help your business grow and succeed across multiple channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Services
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}