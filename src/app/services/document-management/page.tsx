import Link from 'next/link';
import Image from 'next/image';

export default function DocumentManagementPage() {
  const services = [
    {
      title: 'BOL Management',
      description: 'Complete Bill of Lading handling from creation to filing',
      icon: '📋'
    },
    {
      title: 'Invoice Processing',
      description: 'Professional invoice creation and submission to customers',
      icon: '💼'
    },
    {
      title: 'Compliance Documentation',
      description: 'Ensure all DOT and regulatory compliance documents are current',
      icon: '✅'
    },
    {
      title: 'Digital Records',
      description: 'Secure digital storage and organization of all documents',
      icon: '💾'
    }
  ];

  const documents = [
    {
      category: 'Load Documents',
      items: ['Bill of Lading (BOL)', 'Rate Confirmations', 'Delivery Receipts', 'Load Assignments']
    },
    {
      category: 'Financial Documents',
      items: ['Invoices', 'Payment Records', 'Expense Reports', 'Tax Documents']
    },
    {
      category: 'Compliance Documents',
      items: ['DOT Inspections', 'Driver Logs', 'Safety Records', 'Insurance Papers']
    },
    {
      category: 'Operational Documents',
      items: ['Trip Reports', 'Fuel Receipts', 'Maintenance Records', 'Communication Logs']
    }
  ];

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Focus on driving while we handle all paperwork',
      icon: '⏰'
    },
    {
      title: 'Compliance Assurance',
      description: 'Stay compliant with all DOT and regulatory requirements',
      icon: '🛡️'
    },
    {
      title: 'Organized Records',
      description: 'All documents properly organized and easily accessible',
      icon: '📁'
    },
    {
      title: 'Faster Payments',
      description: 'Quick document processing leads to faster payment cycles',
      icon: '💰'
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
            alt="Document Management Background"
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
                Document Management & Paperwork
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Complete paperwork handling including BOLs, invoices, and compliance documentation. We manage all your documents so you can focus on what you do best - driving.
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
              <div className="text-8xl mb-4">📋</div>
              <p className="text-gray-100">Professional Document Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Document Management Services
            </h2>
            <p className="text-xl text-gray-600">
              We handle all your paperwork so you can focus on driving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents We Handle */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Documents We Handle
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive document management across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Professional Document Management
            </h2>
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
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Document Management Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Document Collection
              </h3>
              <p className="text-gray-600">
                We collect all necessary documents from you and shippers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Processing & Review
              </h3>
              <p className="text-gray-600">
                Documents are reviewed for accuracy and completeness
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Digital Storage
              </h3>
              <p className="text-gray-600">
                All documents are digitally stored and organized
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Submission & Filing
              </h3>
              <p className="text-gray-600">
                Documents are submitted to appropriate parties and filed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let Us Handle Your Paperwork
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn how we can streamline your document management.
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