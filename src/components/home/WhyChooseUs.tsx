const benefits = [
  {
    title: 'Safe & Reliable',
    description: 'We prioritize safety in all operations, ensuring your cargo arrives securely and on time.',
    icon: '🛡️'
  },
  {
    title: 'Customer Support',
    description: '24/7 Customer support for all your inquiries and assistance needs.',
    icon: '📞'
  },
  {
    title: 'Industry Expertise',
    description: 'Our team brings years of logistics experience to optimize your operations and routes.',
    icon: '🏆'
  },
  {
    title: 'Cost Effective',
    description: 'Maximize your profits with our competitive rates and efficient dispatch solutions.',
    icon: '💰'
  },
  {
    title: 'Technology Driven',
    description: 'Advanced tracking and management systems to keep your business running smoothly.',
    icon: '💻'
  },
  {
    title: 'Nationwide Coverage',
    description: 'Extensive network of carriers and routes across the entire United States.',
    icon: '🇺🇸'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Simba Dispatch Services LLC?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine industry expertise with professional dispatch services to maximize
            your earnings and streamline your trucking operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full shadow-lg">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Maximize Your Earnings?
              </h3>
              <p className="text-gray-300 mb-6">
                Join 50+ satisfied clients who trust Simba Dispatch Services LLC for their dispatching needs.
                Contact us today for discussion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:cs@simbadispatchservices.com"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center border border-gray-700 transform hover:scale-105 duration-300"
                >
                  Email Us Directly
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center transform hover:scale-105 duration-300"
                >
                  Send Query
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-black border border-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2 pl-1.5">Free Consultation</div>
                <div className="text-gray-300">Orlando, FL Office</div>
                <div className="text-2xl font-bold text-white mt-2">8AM-5PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}