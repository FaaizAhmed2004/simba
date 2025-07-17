import Link from 'next/link';
import Image from 'next/image';

export default function FBMFulfillmentPage() {
  const pricingTiers = [
    { weight: '1 - 5 lbs', price: '$2.00', description: 'Light packages' },
    { weight: '6 - 10 lbs', price: '$2.50', description: 'Medium packages' },
    { weight: '11 - 15 lbs', price: '$3.00', description: 'Heavy packages' },
    { weight: '16 - 20 lbs', price: '$3.50', description: 'Extra heavy packages' },
    { weight: '21 - 25 lbs', price: '$4.00', description: 'Maximum weight' }
  ];

  const services = [
    {
      title: 'Order Processing',
      description: 'Fast and accurate order processing with same-day fulfillment for orders received before 2 PM.',
      icon: '⚡'
    },
    {
      title: 'Pick & Pack',
      description: 'Professional picking and packing services with quality control at every step.',
      icon: '📦'
    },
    {
      title: 'Custom Packaging',
      description: 'Branded packaging options and custom inserts to enhance your customer experience.',
      icon: '🎨'
    },
    {
      title: 'Direct Shipping',
      description: 'Direct-to-customer shipping with tracking information provided automatically.',
      icon: '🚚'
    },
    {
      title: 'Returns Processing',
      description: 'Complete returns management including inspection, restocking, and customer communication.',
      icon: '↩️'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with low-stock alerts and automated reorder points.',
      icon: '📊'
    }
  ];

  const benefits = [
    {
      title: 'Fast Turnaround',
      description: 'Same-day processing for orders received before 2 PM EST',
      icon: '⏰'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive weight-based pricing with no hidden fees',
      icon: '💰'
    },
    {
      title: 'Quality Control',
      description: 'Multi-point quality checks ensure accurate fulfillment',
      icon: '✅'
    },
    {
      title: 'Scalable Solution',
      description: 'Grow your business without worrying about fulfillment capacity',
      icon: '📈'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Send Inventory',
      description: 'Ship your products to our fulfillment center'
    },
    {
      step: 2,
      title: 'Receive & Store',
      description: 'We receive, inspect, and store your inventory'
    },
    {
      step: 3,
      title: 'Process Orders',
      description: 'Orders are picked, packed, and shipped same day'
    },
    {
      step: 4,
      title: 'Track & Deliver',
      description: 'Customers receive tracking info and fast delivery'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assests/download (1).jpeg"
            alt="FBM Fulfillment Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                FBM Fulfillment Services
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Professional fulfillment by merchant services for your e-commerce business. Fast, accurate, and cost-effective order fulfillment that scales with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Get FBM Quote
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-4">
                <Image
                  src="/assests/10010.png"
                  alt="FBM Fulfillment Services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-purple-100">Professional FBM Fulfillment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Weight-Based Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent pricing based on package weight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tier.weight}
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-gray-600 mb-4">per package</p>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
              <p className="text-yellow-800">
                <strong>Volume Discounts:</strong> Contact us for custom pricing on high-volume orders
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
              Complete FBM Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end fulfillment solutions for your business
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

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our FBM Service?
            </h2>
            <p className="text-xl text-gray-600">
              Advantages that help your business succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get your FBM fulfillment started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Whats the difference between FBM and FBA?
              </h3>
              <p className="text-gray-600">
                FBM (Fulfillment by Merchant) means you handle the fulfillment process, while FBA (Fulfillment by Amazon) means Amazon handles it. Our FBM service gives you the control of FBM with the convenience of professional fulfillment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How fast do you process orders?
              </h3>
              <p className="text-gray-600">
                Orders received before 2 PM EST are processed and shipped the same day. Orders received after 2 PM are processed the next business day.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you handle returns?
              </h3>
              <p className="text-gray-600">
                Yes, we provide complete returns management including receiving, inspection, restocking, and customer communication. Returns processing fees apply based on the complexity of the return.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I use custom packaging?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer custom packaging options including branded boxes, inserts, and promotional materials to enhance your customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your Fulfillment?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with professional FBM fulfillment services and focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/auth/register"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}