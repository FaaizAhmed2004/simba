import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Free Quote - Simba Dispatch Services LLC",
  description: "Get a free quote for truck dispatching, FBA prep, FBM fulfillment, and logistics services. Professional 3PL solutions tailored to your business needs.",
  keywords: "free quote, truck dispatching quote, FBA prep quote, FBM fulfillment quote, logistics quote, dispatch services",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}