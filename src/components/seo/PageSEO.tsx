import { Metadata } from 'next';
import StructuredData from './StructuredData';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  structuredData?: unknown;
  children?: React.ReactNode;
}

export default function PageSEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  structuredData,
  children 
}: PageSEOProps) {
  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      {children}
    </>
  );
}

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/simba.jpg',
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const baseUrl = 'https://simbadispatchservices.com';
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
  };
}