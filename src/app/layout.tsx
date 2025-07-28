import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/SessionProvider";
import StructuredData from "@/components/seo/StructuredData";
import LogoStructuredData from "@/components/seo/LogoStructuredData";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://simbadispatchservices.com'),
  title: {
    default: "Simba Dispatch Services LLC - Professional 3PL Services & Truck Dispatching",
    template: "%s | Simba Dispatch Services LLC"
  },
  description: "Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA. Get reliable third party logistics solutions.",
  keywords: "truck dispatching, 3PL services, third party logistics, FBA prep, FBM fulfillment, logistics, load finding, route optimization, Amazon services, dispatch services, freight, transportation, trucking dispatch",
  authors: [{ name: "Simba Dispatch Services LLC" }],
  creator: "Simba Dispatch Services LLC",
  publisher: "Simba Dispatch Services LLC",
  robots: "index,follow",
  openGraph: {
    title: "Simba Dispatch Services LLC - Professional 3PL Services & Truck Dispatching",
    description: "Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
    url: "https://simbadispatchservices.com",
    siteName: "Simba Dispatch Services LLC",
    images: [
      {
        url: "https://simbadispatchservices.com/simbaDispatch.png",
        width: 1200,
        height: 630,
        alt: "Simba Dispatch Services LLC - Professional Logistics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simba Dispatch Services LLC - Professional 3PL Services & Truck Dispatching",
    description: "Professional truck dispatching, 3PL services, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
    images: ["https://simbadispatchservices.com/simba.jpg"],
    creator: "@SimbaDispatch",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://simbadispatchservices.com",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  category: "logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Enhanced Open Graph and Twitter meta tags for better logo display */}
        <meta property="og:image" content="https://simbadispatchservices.com/simba.jpg" />
        <meta property="og:image:secure_url" content="https://simbadispatchservices.com/simba.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Simba Dispatch Services LLC - Professional 3PL Services & Truck Dispatching" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:image" content="https://simbadispatchservices.com/simba.jpg" />
        <meta name="twitter:image:alt" content="Simba Dispatch Services LLC - Professional 3PL Services & Truck Dispatching" />

        {/* Additional meta tags for better search appearance */}
        <meta name="application-name" content="Simba Dispatch Services LLC" />
        <meta name="apple-mobile-web-app-title" content="Simba Dispatch" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Google-specific logo meta tags */}
        <link rel="image_src" href="https://simbadispatchservices.com/simba.jpg" />
        <meta name="thumbnail" content="https://simbadispatchservices.com/simba.jpg" />
        <meta property="business:contact_data:website" content="https://simbadispatchservices.com" />
        <meta property="business:contact_data:company_name" content="Simba Dispatch Services LLC" />

        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <LogoStructuredData />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ''} />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ''} />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
