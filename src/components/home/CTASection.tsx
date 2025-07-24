import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Earnings?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Join 50+ satisfied truck operators who trust Simba Dispatch Services LLC for their 
            dispatching needs. Contact us today for discussion!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="mailto:cs@simbadispatchservices.com" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700 transform hover:scale-105 duration-300"
            >
              Email Us Directly
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 duration-300"
            >
              Send Query
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4 shadow-lg h-full">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold text-white">24/7 Support</div>
                <p className="text-gray-300 mt-2">Round-the-clock dispatch support</p>
              </div>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4 shadow-lg h-full">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-white">Flexible % Weekly Fixed Fee</div>
                <p className="text-gray-300 mt-2">Contact for discussion</p>
              </div>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4 shadow-lg h-full">
                <div className="text-3xl mb-2">🚚</div>
                <div className="font-semibold text-white">Nationwide Service</div>
                <p className="text-gray-300 mt-2">Operating across all 50 states</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}