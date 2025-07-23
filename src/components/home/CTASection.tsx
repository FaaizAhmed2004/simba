import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Earnings?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join 50+ satisfied truck operators who trust Simba Dispatch Services LLC for their 
            dispatching needs. Contact us today for discussion!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="mailto:simbadispatchservices@gmail.com" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Email Us Directly
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Send Query
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold">24/7 Support</div>
              </div>
              <p className="text-blue-200">Round-the-clock dispatch support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold">Flexible %</div>
              </div>
              <p className="text-blue-200">Contact for discussion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}