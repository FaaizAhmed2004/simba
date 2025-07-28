import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Simba Dispatch Services LLC - Professional Truck Dispatching & 3PL Services",
  description: "Contact Simba Dispatch Services for professional truck dispatching, 3PL logistics, and FBA prep services. Located in Orlando, FL. Call +1 (410) 755-5627 or email cs@simbadispatchservices.com",
  keywords: "contact truck dispatch, Orlando FL logistics, 3PL services contact, FBA prep services, truck dispatching company contact, logistics services Orlando, dispatch services phone number",
  openGraph: {
    title: "Contact Simba Dispatch Services LLC - Professional Truck Dispatching & 3PL Services",
    description: "Get in touch with Simba Dispatch Services for professional truck dispatching, 3PL logistics, and FBA prep services. Quick response time guaranteed.",
    url: "https://simbadispatchservices.com/contact",
    siteName: "Simba Dispatch Services LLC",
    images: [
      {
        url: "/simbaDispatch.png",
        width: 1200,
        height: 630,
        alt: "Contact Simba Dispatch Services LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Simba Dispatch Services LLC - Professional Truck Dispatching & 3PL Services",
    description: "Get in touch with Simba Dispatch Services for professional truck dispatching, 3PL logistics, and FBA prep services. Quick response time guaranteed.",
    images: ["/simbaDispatch.png"],
  },
  alternates: {
    canonical: "https://simbadispatchservices.com/contact",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Orlando",
    "geo.position": "28.5383;-81.3792",
    "ICBM": "28.5383, -81.3792",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Orlando" />
        <meta name="geo.position" content="28.5383;-81.3792" />
        <meta name="ICBM" content="28.5383, -81.3792" />
        <link rel="canonical" href="https://simbadispatchservices.com/contact" />
      </head>
      {children}
    </>
  );
}