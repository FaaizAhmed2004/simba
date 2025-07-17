const benefits = [
  {
    title: 'USA-Only Operations',
    description: 'Focused exclusively on the United States market, ensuring deep local expertise and compliance.',
    icon: '🇺🇸'
  },
  {
    title: 'Real-Time Tracking',
    description: 'Track your shipments in real-time with detailed updates and delivery confirmations.',
    icon: '📍'
  },
  {
    title: 'Competitive Pricing',
    description: 'Transparent, competitive pricing with no hidden fees. Get exactly what you pay for.',
    icon: '💰'
  },
  {
    title: 'Expert Support',
    description: '24/7 customer support from logistics experts who understand your business needs.',
    icon: '🎯'
  },
  {
    title: 'Scalable Solutions',
    description: 'From startup to enterprise, our solutions grow with your business requirements.',
    icon: '📈'
  },
  {
    title: 'Technology Driven',
    description: 'Modern technology platform for seamless booking, tracking, and management.',
    icon: '💻'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Simba Dispatch LLC?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise with cutting-edge technology to deliver 
            exceptional logistics solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Streamline Your Logistics?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of businesses who trust Simba Dispatch LLC for their shipping and fulfillment needs. 
                Get started today with a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/quote" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Free Quote
                </a>
                <a 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2 pl-1.5">Free Consultation</div>
                <div className="text-gray-600">Speak with our logistics experts</div>
                <div className="text-2xl font-bold text-gray-900 mt-2">1-410-831-1883</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}