import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          src="/herovid.mp4"
        >
        </video>
        {/* Fallback image in case video doesn't load */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/assests/10050.jpeg"
            alt="Logistics and shipping background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Professional Truck Dispatch Services and 3PL Services Provider in the USA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            We professionally handle everything for you
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

      {/* Stats Cards - Positioned at bottom with proper spacing */}
      <div className="relative pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}