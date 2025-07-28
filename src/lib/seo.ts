import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: unknown;
}

const baseUrl = 'https://simbadispatchservices.com';
const defaultImage = 'https://simbadispatchservices.com/simba.jpg';

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = defaultImage,
    noIndex = false,
    structuredData
  } = config;

  const fullTitle = title.includes('Simba') ? title : `${title} | Simba Dispatch Services LLC`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Simba Dispatch Services LLC',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl ? {
      canonical: canonicalUrl,
    } : undefined,
    other: structuredData ? {
      'application/ld+json': JSON.stringify(structuredData)
    } : undefined,
  };
}

// Common structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Simba Dispatch Services LLC",
  "url": baseUrl,
  "logo": `${baseUrl}/simba.jpg`,
  "description": "Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    // Add social media URLs when available
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Simba Dispatch Services LLC",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": `${baseUrl}${service.url}`,
  "provider": {
    "@type": "Organization",
    "name": "Simba Dispatch Services LLC",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${baseUrl}${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});