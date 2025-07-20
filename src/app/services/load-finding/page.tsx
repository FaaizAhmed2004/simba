import Link from 'next/link';
import Image from 'next/image';

export default function LoadFindingPage() {
  const benefits = [
    {
      title: 'High-Paying Loads',
      description: 'We focus on finding loads that offer the best rates in the market',
      icon: '💰'
    },
    {
      title: 'Route Matching',
      description: 'Loads are matched to your preferred routes and destinations',
      icon: '🎯'
    },
    {
      title: 'Load Verification',
      description: 'All loads are verified for legitimacy and payment reliability',
      icon: '✅'
    },
    {
      title: 'Quick Booking',
      description: 'Fast booking process to secure loads before competitors',
      icon: '⚡'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Profile Setup',
      description: 'We set up your truck profile with specifications and preferences'
    },
    {
      step: 2,
      title: 'Load Search',
      description: 'Our team searches for high-paying loads matching your criteria'
    },
    {
      step: 3,
      title: 'Load Verification',
      description: 'We verify load details, shipper reliability, and payment terms'
    },
    {
      step: 4,
      title: 'Booking & Confirmation',
      description: 'We book the load and provide you with all necessary details'
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
            alt="Load Finding Background"
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
                Load Finding & Booking Services
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                We find the best paying loads that match your truck specifications and route preferences. Our experienced team handles all the searching and booking so you can focus on driving.
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
              <div className="text-8xl mb-4">🎯</div>
              <p className="text-gray-100">Professional Load Finding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Load Finding Service?
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in finding high-paying loads that maximize your earnings
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

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Load Finding Process Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get you the best loads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Commission Structure
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We only succeed when you succeed
          </p>

          <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-blue-600 mb-2">Flexible %</div>
            <div className="text-lg text-gray-900 mb-4">Commission per load</div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• No upfront fees</p>
              <p>• No monthly charges</p>
              <p>• Pay only when you get paid</p>
              <p>• Contact for discussion on percentage</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Better Loads?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss how we can help you find high-paying loads.
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