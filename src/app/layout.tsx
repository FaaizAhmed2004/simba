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
