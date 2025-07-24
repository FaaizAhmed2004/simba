import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import Image from 'next/image';
import Link from 'next/link';

function ServicesHeroSection() {
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
          src="/trucks.mp4"
        >
        </video>
        {/* Fallback image in case video doesn't load */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/assests/10053.jpeg"
            alt="Services background"
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
            Our Professional Logistics & Dispatch Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Explore our full suite of logistics, dispatch, and fulfillment solutions tailored for your business.
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
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesHeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}