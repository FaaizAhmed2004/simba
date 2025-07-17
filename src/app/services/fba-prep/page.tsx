import Link from 'next/link';
import Image from 'next/image';

export default function FBAPrepPage() {
  const pricingTiers = [
    { range: '50 - 500 units', price: '$0.75', description: 'Perfect for small businesses' },
    { range: '500 - 1,000 units', price: '$0.60', description: 'Great for growing businesses' },
    { range: '1,000 - 1,500 units', price: '$0.50', description: 'Ideal for established sellers' },
    { range: '1,500+ units', price: '$0.45', description: 'Best value for high volume' }
  ];

  const services = [
    {
      title: 'Receiving & Inspection',
      description: 'We receive your inventory and conduct thorough quality inspections to ensure products meet Amazon standards.',
      icon: '📋'
    },
    {
      title: 'FNSKU Labeling',
      description: 'Professional application of Amazon FNSKU labels with precision and accuracy.',
      icon: '🏷️'
    },
    {
      title: 'Repackaging',
      description: 'Expert repackaging services to meet Amazon packaging requirements and protect your products.',
      icon: '📦'
    },
    {
      title: 'Bundling Services',
      description: 'Create product bundles and multi-packs according to your specifications.',
      icon: '🎁'
    },
    {
      title: 'Quality Control',
      description: 'Comprehensive quality checks to prevent returns and maintain your seller rating.',
      icon: '✅'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and management to optimize your stock levels.',
      icon: '📊'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Send Your Inventory',
      description: 'Ship your products to our secure warehouse facility.'
    },
    {
      step: 2,
      title: 'Receiving & Inspection',
      description: 'We receive and inspect all items for quality and compliance.'
    },
    {
      step: 3,
      title: 'Prep & Label',
      description: 'Professional prep work including FNSKU labeling and repackaging.'
    },
    {
      step: 4,
      title: 'Ship to Amazon',
      description: 'We create shipments and send your products directly to Amazon FBA.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Amazon FBA Prep Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional FBA preparation services to get your products Amazon-ready. From receiving to shipping, we handle everything so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Get FBA Quote
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-4">
                <Image
                  src="/assests/10008.webp"
                  alt="FBA Prep Services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-blue-100">Professional FBA Prep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Volume-based pricing that scales with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tier.range}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-gray-600 mb-4">per unit</p>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
              <p className="text-yellow-800">
                <strong>Box Charges:</strong> $1.25 - $4.50 per box (based on size)
              </p>
              <p className="text-yellow-800 mt-1">
                <strong>Custom Barcodes:</strong> Pricing negotiable when you provide your own barcodes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete FBA Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to get your products Amazon-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get your products FBA-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What&apos;s included in the per-unit price?
              </h3>
              <p className="text-gray-600">
                Our per-unit price includes receiving, inspection, FNSKU labeling, repackaging (if needed), and creating shipments to Amazon. Box charges are additional based on the size of boxes required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does the FBA prep process take?
              </h3>
              <p className="text-gray-600">
                Typically 2-3 business days from when we receive your inventory. Rush processing is available for urgent shipments.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide custom barcode services?
              </h3>
              <p className="text-gray-600">
                Yes! If you provide your own barcodes, we offer negotiable pricing. Contact us to discuss your specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if my products need special handling?
              </h3>
              <p className="text-gray-600">
                We handle fragile items, hazmat products, and other special requirements. Additional fees may apply based on the complexity of handling required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your FBA Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get an instant quote and see how much time and money you can save with our professional FBA prep services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/auth/register"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}