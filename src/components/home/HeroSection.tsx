import Link from 'next/link';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assests/10050.jpeg"
          alt="Logistics and shipping background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Dispatching
            <span className="block text-blue-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Expert dispatching services including load finding, route planning, document management, billing, and driver support - we handle everything so you can focus on driving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/quote" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Get Instant Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Cards - Positioned at bottom with proper spacing */}
      <div className="relative pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}