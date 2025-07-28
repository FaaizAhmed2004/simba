import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import StructuredData from './StructuredData';
import { breadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  
  return (
    <>
      <StructuredData data={breadcrumbSchema(allItems)} />
      <nav className={`flex items-center space-x-2 text-sm text-gray-400 ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-500" />
              )}
              {index === allItems.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}