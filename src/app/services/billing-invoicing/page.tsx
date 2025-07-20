import Link from 'next/link';
import Image from 'next/image';

export default function BillingInvoicingPage() {
  const features = [
    {
      title: 'Quick Invoicing',
      description: 'Generate professional invoices immediately after load completion with all necessary details.',
      icon: '⚡'
    },
    {
      title: 'Payment Tracking',
      description: 'Monitor payment status in real-time and get alerts for overdue payments.',
      icon: '📊'
    },
    {
      title: 'Financial Reports',
      description: 'Detailed financial reports to help you track earnings and manage your business.',
      icon: '📈'
    },
    {
      title: 'Dispute Resolution',
      description: 'Professional handling of payment disputes and rate negotiations.',
      icon: '⚖️'
    },
    {
      title: 'Account Management',
      description: 'Dedicated account management to ensure smooth payment processes.',
      icon: '👥'
    },
    {
      title: 'Tax Documentation',
      description: 'Organized tax documents and 1099 forms for easy tax preparation.',
      icon: '📋'
    }
  ];

  const benefits = [
    {
      title: 'Faster Payments',
      description: 'Get paid faster with our streamlined invoicing and follow-up process.',
      icon: '💰'
    },
    {
      title: 'Professional Image',
      description: 'Present a professional image with branded invoices and documentation.',
      icon: '✨'
    },
    {
      title: 'Reduced Paperwork',
      description: 'Eliminate manual paperwork and focus on driving while we handle billing.',
      icon: '📄'
    },
    {
      title: 'Better Cash Flow',
      description: 'Improve cash flow with consistent follow-up and payment tracking.',
      icon: '💳'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Load Completion',
      description: 'Complete your delivery and submit required documentation'
    },
    {
      step: 2,
      title: 'Invoice Generation',
      description: 'We create and send professional invoices immediately'
    },
    {
      step: 3,
      title: 'Payment Follow-up',
      description: 'We handle all payment follow-up and communication'
    },
    {
      step: 4,
      title: 'Payment Processing',
      description: 'Receive your payment minus our agreed commission'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assests/10050.jpeg"
            alt="Billing and Invoicing Background"
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
                Professional Billing & Invoicing Services
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Let us handle all your billing and invoicing needs so you can focus on driving. Professional, timely, and accurate financial management for truck operators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:simbadispatchservices@gmail.com"
                  className="bg-white text-gray-800 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Contact for Discussion
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-800 transition-colors text-center"
                >
                  Send Query
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">💳</div>
              <p className="text-gray-100">Professional Billing Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Billing & Invoicing Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional financial management for truck operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
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
              Why Choose Our Billing Services?
            </h2>
            <p className="text-xl text-gray-600">
              Focus on driving while we handle your finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Billing Process Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and transparent billing process
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our billing services are included in your dispatch commission
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-blue-600 mb-2">Included</div>
            <div className="text-lg text-gray-900 mb-4">In dispatch service</div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• No additional fees</p>
              <p>• No setup charges</p>
              <p>• Professional invoicing included</p>
              <p>• Payment tracking included</p>
              <p>• Financial reports included</p>
            </div>
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
                How quickly do you send invoices?
              </h3>
              <p className="text-gray-600">
                We send professional invoices within 24 hours of load completion, ensuring faster payment processing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if there is a payment dispute?
              </h3>
              <p className="text-gray-600">
                Our experienced team handles all payment disputes professionally, working directly with brokers and shippers to resolve issues quickly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide tax documents?
              </h3>
              <p className="text-gray-600">
                Yes, we provide organized financial records and 1099 forms at year-end to make tax preparation easier for you.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I track my payments?
              </h3>
              <p className="text-gray-600">
                We provide regular updates on payment status and can set up a system for you to track all your invoices and payments in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your Billing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us handle your billing and invoicing so you can focus on what you do best - driving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:simbadispatchservices@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Email Us Directly
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}