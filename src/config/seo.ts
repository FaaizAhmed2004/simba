export const seoConfig = {
  baseUrl: 'https://simbadispatchservices.com',
  siteName: 'Simba Dispatch Services LLC',
  defaultTitle: 'Simba Dispatch Services LLC - Professional 3PL & Dispatch Services',
  defaultDescription: 'Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA. Get reliable 3PL solutions.',
  defaultKeywords: 'truck dispatching, 3PL services, third party logistics, FBA prep, FBM fulfillment, logistics, load finding, route optimization, Amazon services, dispatch services, freight, transportation, trucking dispatch',
  defaultImage: 'https://simbadispatchservices.com/simba.jpg',
  twitterHandle: '@SimbaDispatch',
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'Professional 3PL Services & Truck Dispatching | Simba Dispatch Services LLC',
      description: 'Leading provider of truck dispatching, 3PL services, FBA prep, FBM fulfillment, and logistics services. Streamline your supply chain with our expert third party logistics solutions.',
      keywords: 'truck dispatching, 3PL services, third party logistics, FBA prep, FBM fulfillment, logistics, freight dispatching, Amazon services, trucking dispatch, dispatch services',
    },
    about: {
      title: 'About Us - Professional 3PL & Truck Dispatching Team',
      description: 'Learn about Simba Dispatch Services LLC, our experienced team, and our commitment to providing exceptional truck dispatching and 3PL services.',
      keywords: 'logistics company, truck dispatching team, 3PL services, third party logistics, professional trucking, freight management, dispatch services',
    },
    services: {
      title: '3PL Services & Truck Dispatching Solutions',
      description: 'Comprehensive 3PL services including truck dispatching, FBA prep, FBM fulfillment, load finding, route planning, and document management.',
      keywords: '3PL services, truck dispatching, third party logistics, FBA prep, FBM fulfillment, load finding, route planning, dispatch services, logistics services',
    },
    contact: {
      title: 'Contact Us - Get Your Free 3PL & Truck Dispatching Quote',
      description: 'Contact Simba Dispatch Services LLC for professional truck dispatching and 3PL services. Get your free quote today and streamline your supply chain.',
      keywords: 'contact logistics company, truck dispatching quote, 3PL services quote, dispatch services contact, freight management contact, third party logistics',
    },
    quote: {
      title: 'Get Your Free 3PL & Truck Dispatching Quote',
      description: 'Request a free quote for our professional truck dispatching and 3PL services. Custom solutions for your trucking and fulfillment needs.',
      keywords: 'truck dispatching quote, 3PL services pricing, logistics quote, dispatch services pricing, freight quote, trucking services cost, third party logistics quote',
    },
    pricing: {
      title: 'Competitive 3PL & Truck Dispatching Pricing',
      description: 'Transparent pricing for our truck dispatching and 3PL services. Find the right plan for your trucking and fulfillment needs.',
      keywords: 'truck dispatching pricing, 3PL services cost, logistics pricing, dispatch services cost, freight management rates, trucking services pricing, third party logistics rates',
    },
    faq: {
      title: 'Frequently Asked Questions - 3PL & Truck Dispatching',
      description: 'Find answers to common questions about our truck dispatching, 3PL services, and freight management solutions.',
      keywords: 'truck dispatching FAQ, 3PL services questions, logistics FAQ, dispatch services questions, freight management help, third party logistics FAQ',
    },
    support: {
      title: 'Customer Support Center - 3PL & Truck Dispatching Help',
      description: 'Get help with your truck dispatching and 3PL services. Our support team is here to assist with account issues, feedback, and complaints.',
      keywords: 'truck dispatching support, 3PL services help, logistics support, dispatch services help, customer service, freight management assistance, third party logistics support',
    },
    // Service pages
    'services/fba-prep': {
      title: 'Amazon FBA Prep Services',
      description: 'Professional Amazon FBA preparation services. We handle labeling, packaging, and shipping to Amazon fulfillment centers.',
      keywords: 'Amazon FBA prep, FBA preparation services, Amazon fulfillment, product labeling, FBA shipping',
    },
    'services/fbm-fulfillment': {
      title: 'FBM Fulfillment Services',
      description: 'Complete Fulfillment by Merchant (FBM) services for Amazon sellers. Order processing, packaging, and shipping solutions.',
      keywords: 'FBM fulfillment, Amazon FBM, fulfillment by merchant, order fulfillment, Amazon seller services',
    },
    'services/truck-dispatching': {
      title: 'Professional Truck Dispatching Services - Expert Dispatch Solutions',
      description: 'Expert truck dispatching services to maximize your revenue. Load finding, route optimization, and 24/7 truck dispatch support.',
      keywords: 'truck dispatching, professional truck dispatching, freight dispatching, load dispatching, trucking services, dispatch company, trucking dispatch, dispatch services',
    },
    'services/load-finding': {
      title: 'Load Finding & Freight Matching',
      description: 'Professional load finding services to keep your trucks moving. Access to premium load boards and freight matching.',
      keywords: 'load finding, freight matching, load boards, trucking loads, freight broker services',
    },
    'services/route-planning': {
      title: 'Route Planning & Optimization',
      description: 'Advanced route planning and optimization services to reduce fuel costs and improve delivery times.',
      keywords: 'route planning, route optimization, trucking routes, delivery optimization, logistics planning',
    },
    'services/billing-invoicing': {
      title: 'Billing & Invoicing Services',
      description: 'Professional billing and invoicing services for trucking companies. Streamline your financial operations.',
      keywords: 'trucking billing, freight invoicing, logistics billing, transportation invoicing, dispatch billing',
    },
    'services/document-management': {
      title: 'Document Management Services',
      description: 'Comprehensive document management for trucking operations. BOL, permits, compliance documents, and more.',
      keywords: 'trucking documents, freight paperwork, BOL management, compliance documents, transportation documents',
    },
  },
  
  // Structured data templates
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Simba Dispatch Services LLC",
      "url": "https://simbadispatchservices.com",
      "logo": "https://simbadispatchservices.com/simba.jpg",
      "description": "Professional truck dispatching, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Simba Dispatch Services LLC",
      "url": "https://simbadispatchservices.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://simbadispatchservices.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  }
};