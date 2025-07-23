const benefits = [
  {
    title: 'Load Finding & Booking',
    description: 'We find the highest-paying loads that match your truck specifications and route preferences.',
    icon: '🎯'
  },
  {
    title: 'Route Planning & Optimization',
    description: 'Optimize routes for maximum efficiency, reduced fuel costs, and improved delivery times.',
    icon: '🗺️'
  },
  {
    title: 'Document Management',
    description: 'Complete paperwork handling including BOLs, invoices, and compliance documentation.',
    icon: '📋'
  },
  {
    title: 'Billing & Invoicing',
    description: 'Professional billing services with timely invoicing and payment tracking.',
    icon: '💳'
  },
  {
    title: 'Driver Support',
    description: '24/7 driver support for emergencies, route changes, and customer communications.',
    icon: '📞'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Simba Dispatch Services LLC?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise with professional dispatch services to maximize 
            your earnings and streamline your trucking operations.
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
                Ready to Maximize Your Earnings?
              </h3>
              <p className="text-gray-600 mb-6">
                Join 50+ satisfied truck operators who trust Simba Dispatch Services LLC for their dispatching needs. 
                Contact us today for discussion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:simbadispatchservices@gmail.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Email Us Directly
                </a>
                <a 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Send Query
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2 pl-1.5">Free Consultation</div>
                <div className="text-gray-600">Orlando, FL Office</div>
                <div className="text-2xl font-bold text-gray-900 mt-2">8AM-5PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}