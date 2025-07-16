import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join thousands of businesses who trust Simba Logistics for their shipping, 
            fulfillment, and dispatching needs. Get started today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/quote" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Get Free Quote Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Speak with Expert
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Instant Quotes</div>
              </div>
              <p className="text-blue-200">Get pricing in seconds, not hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Expert Support</div>
              </div>
              <p className="text-blue-200">24/7 assistance from logistics pros</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold">Fast Setup</div>
              </div>
              <p className="text-blue-200">Start shipping within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}