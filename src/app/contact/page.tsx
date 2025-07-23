import { 
  MapPinIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Simba Dispatch Services LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with our truck dispatching experts for professional services
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Send us your query via email - we respond quickly!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">Send us your query</p>
            <a href="mailto:simbadispatchservices@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              simbadispatchservices@gmail.com
            </a>
          </div>

          {/* Office Location */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600 mb-2">Orlando, FL Office</p>
            <p className="text-gray-800">
              Orlando, Florida<br />
              United States
            </p>
          </div>

          {/* Business Hours */}
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600 mb-2">7 days a week</p>
            <div className="text-gray-800 text-sm">
              <p>7 Days: 8AM-5PM EST</p>
            </div>
          </div>
        </div>

        {/* Email CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Get Started?</h3>
            <p className="text-blue-800 mb-6">
              Send us an email with your truck details and we will get back to you within 2-4 hours during business hours.
            </p>
            <a 
              href="mailto:simbadispatchservices@gmail.com? Dispatching Inquiry"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Send Email Now
            </a>
          </div>
        </div>

        {/* Services We Provide */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Truck Dispatching Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Load Finding & Booking</h4>
              <p className="text-gray-600 text-sm">We find high-paying loads that match your route</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🗺️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Route Planning</h4>
              <p className="text-gray-600 text-sm">Optimize routes for fuel efficiency and time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-semibold text-gray-900 mb-2">Document Management</h4>
              <p className="text-gray-600 text-sm">Handle all paperwork and compliance docs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-semibold text-gray-900 mb-2">Billing & Invoicing</h4>
              <p className="text-gray-600 text-sm">Professional billing and payment tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold text-gray-900 mb-2">Driver Support</h4>
              <p className="text-gray-600 text-sm">24/7 support for emergencies and route changes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Commission</h4>
              <p className="text-gray-600 text-sm">Contact us to discuss percentage rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}