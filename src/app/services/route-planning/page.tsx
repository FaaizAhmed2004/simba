import Link from 'next/link';
import Image from 'next/image';

export default function RoutePlanningPage() {
  const benefits = [
    {
      title: 'Fuel Optimization',
      description: 'Reduce fuel costs with the most efficient routes and fuel stops',
      icon: '⛽'
    },
    {
      title: 'Time Efficiency',
      description: 'Save time with optimized routes that avoid delays and traffic',
      icon: '⏰'
    },
    {
      title: 'Traffic Avoidance',
      description: 'Real-time traffic monitoring to avoid congested areas',
      icon: '🚦'
    },
    {
      title: 'Best Routes',
      description: 'Always get the most efficient route for your specific load',
      icon: '🗺️'
    }
  ];

  const features = [
    {
      title: 'Real-Time Traffic Analysis',
      description: 'Monitor traffic conditions and adjust routes accordingly',
      icon: '📊'
    },
    {
      title: 'Weather Considerations',
      description: 'Factor in weather conditions for safer, more efficient routes',
      icon: '🌤️'
    },
    {
      title: 'Fuel Stop Planning',
      description: 'Strategic fuel stops to minimize costs and maximize efficiency',
      icon: '⛽'
    },
    {
      title: 'Rest Area Planning',
      description: 'Plan mandatory rest stops to comply with HOS regulations',
      icon: '🛏️'
    },
    {
      title: 'Toll Optimization',
      description: 'Balance toll costs with time savings for optimal routes',
      icon: '💰'
    },
    {
      title: 'Load-Specific Routing',
      description: 'Routes tailored to your specific load requirements and restrictions',
      icon: '📦'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assests/10050.jpeg"
            alt="Route Planning Background"
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
                Route Planning & Optimization
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Optimize your routes for maximum efficiency, reduced fuel costs, and improved delivery times. Our expert route planning saves you time and money on every trip.
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
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-gray-100">Professional Route Planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Route Optimization Matters
            </h2>
            <p className="text-xl text-gray-600">
              Save time, fuel, and money with professionally planned routes
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

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Route Planning Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive planning that considers all factors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Savings Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Potential Savings with Route Optimization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15-25%</div>
              <div className="text-gray-900 font-semibold mb-2">Fuel Savings</div>
              <div className="text-gray-600">Average fuel cost reduction through optimized routing</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2-4 hrs</div>
              <div className="text-gray-900 font-semibold mb-2">Time Savings</div>
              <div className="text-gray-600">Average time saved per long-haul trip</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">$500+</div>
              <div className="text-gray-900 font-semibold mb-2">Monthly Savings</div>
              <div className="text-gray-600">Average monthly savings for active drivers</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Saving with Better Routes
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn how our route optimization can increase your profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:simbadispatchservices@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Email Us Directly
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}