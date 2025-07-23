import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Truck Dispatch Service',
    description: 'Professional truck dispatch ',
    features: [ 'Service For Carriers with 24/7', 'Dispatcher Support',' Flexible % or weekly fee'],
    href: '/services/truck-dispatching',
    image: '/assests/10016.jpeg'
  },
  {
    title: 'FBA Prep Services',
    description: 'Complete Amazon FBA preparation including receiving, labeling, and shipment to Amazon.',
    features: ['Product Receiving', 'FNSKU Labeling', 'Quality Inspection', 'Amazon Shipment'],
    href: '/services/fba-prep',
    image: '/assests/10018.jpeg'
  },
  {
    title: 'FBM Fulfillment',
    description: 'Professional fulfillment by merchant services with same-day processing.',
    features: ['Order Processing', 'Pick & Pack', 'Direct Shipping', 'Multi-Channel Support'],
    href: '/services/fbm-fulfillment',
    image: '/assests/10050.jpeg'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 mt-8 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Professional Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From 3PL solutions to dedicated Truck Dispatch Services, we offer comprehensive support designed to help your business grow and succeed across multiple channels.
              <br /> Our end-to-end services ensure efficiency, reliability, and seamless operations tailored to your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>

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