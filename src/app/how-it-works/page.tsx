import HeroSection from '@/components/home/HeroSection';
import FaqSection from '@/components/providers/Faq-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - Simba Dispatch LLC',
  description: 'Learn how Simba Dispatch LLC streamlines your shipping process with our step-by-step logistics solutions for FBA, FBM, freight, and storage services.',
  keywords: 'how it works, logistics process, shipping steps, FBA prep, freight shipping, fulfillment process',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-2.5">
            How Simba Dispatch Services LLC Works
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Streamlined logistics solutions that simplify your shipping process from quote to delivery
          </p>
        </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Efficient, Reliable
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures your shipments are handled with care and delivered on time, every time.
            </p>
          </div>

          {/* Process Steps - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Quote</h3>
              <p className="text-gray-600">
                Request a quote for your shipping needs with our easy online form
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Service</h3>
              <p className="text-gray-600">
                Confirm your shipment details and schedule pickup
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Deliver</h3>
              <p className="text-gray-600">
                Monitor your shipment in real-time until safe delivery
              </p>
            </div>
          </div>
        </div>
      </section>
      <FaqSection/>
    </div>
  );
}