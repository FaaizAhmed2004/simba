import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simba Dispatch Services LLC - Professional 3pl & Dispatch Services",
  description: "Professional truck dispatching, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
  keywords: "truck dispatching, FBA prep, FBM fulfillment, logistics, load finding, route optimization, Amazon services, dispatch services",
  openGraph: {
    title: "Simba Dispatch Services LLC - Professional 3pl & Dispatch Services",
    description: "Professional truck dispatching, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
    url: "https://simbadispatchservices.com",
    siteName: "Simba Dispatch Services LLC",
    images: [
      {
        url: "/simbaDispatch.png",
        width: 1200,
        height: 630,
        alt: "Simba Dispatch Services LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simba Dispatch Services LLC - Professional 3pl & Dispatch Services",
    description: "Professional truck dispatching, FBA prep, FBM fulfillment, load finding, route planning, and logistics services across the USA.",
    images: ["/simbaDispatch.png"],
  },
  icons: {
    icon: "/simbaDispatch.png",
    shortcut: "/simbaDispatch.png",
    apple: "/simbaDispatch.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/simbaDispatch.png" />
        <link rel="apple-touch-icon" href="/simbaDispatch.png" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/simbaDispatch.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/simbaDispatch.png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
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
