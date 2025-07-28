export default function LogoStructuredData() {
  const logoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Simba Dispatch Services LLC",
    "alternateName": ["Simba Dispatch", "Simba Logistics"],
    "url": "https://simbadispatchservices.com",
    "logo": "https://simbadispatchservices.com/simba.jpg",
    "image": [
      "https://simbadispatchservices.com/simba.jpg",
      "https://simbadispatchservices.com/simbaDispatch.png"
    ],
    "description": "Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "knowsAbout": [
      "Truck Dispatching",
      "3PL Services", 
      "FBA Prep",
      "FBM Fulfillment",
      "Logistics",
      "Transportation"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(logoStructuredData) }}
    />
  );
}