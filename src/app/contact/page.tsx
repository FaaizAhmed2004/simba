import {
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact Simba Dispatch Services LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Get in touch with our truck dispatching experts for professional services
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300">Send us your query via email - we respond quickly!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 mb-2">Send us your query</p>
            <a href="mailto:simbadispatchservices@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
            Cs@simbadispatchservices.com
            </a>
          </div>

          {/* Office Location */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
            <p className="text-gray-300 mb-2">Orlando, FL Office</p>
            <p className="text-gray-300">
              Orlando, Florida<br />
              United States
            </p>
          </div>

          {/* Business Hours */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
            <p className="text-gray-300 mb-2">7 days a week</p>
            <div className="text-gray-300 text-sm">
              <p>7 Days: 8AM-5PM EST</p>
            </div>
          </div>
        </div>

        {/* Email CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Send us an email with your truck details and we will get back to you within 2-4 hours during business hours.
            </p>
            <a
              href="mailto:simbadispatchservices@gmail.com? Dispatching Inquiry"
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors border border-gray-700"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Send Email Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}