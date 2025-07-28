# Simba Logistics Website Sitemap

## Site Structure Overview

```
Simba Logistics Website
├── Home (/)
├── About (/about)
├── Services (/services)
│   ├── FBA Prep (/services/fba-prep)
│   ├── FBM Fulfillment (/services/fbm-fulfillment)
│   ├── Truck Dispatching (/services/truck-dispatching)
│   ├── Load Finding (/services/load-finding)
│   ├── Route Planning (/services/route-planning)
│   ├── Billing & Invoicing (/services/billing-invoicing)
│   └── Document Management (/services/document-management)
├── Pricing (/pricing)
├── How It Works (/how-it-works)
├── Quote (/quote)
├── FAQ (/faq)
├── Contact (/contact)
└── Support (/support)
```

## Page Details

### Main Navigation Pages
- **Home (/)** - Landing page with hero section and services overview
- **About (/about)** - Company information and team details
- **Services (/services)** - Overview of all logistics services offered
- **Contact (/contact)** - Contact form and company contact information
- **Quote (/quote)** - Request a quote form
- **Pricing (/pricing)** - Pricing information and plans
- **How It Works (/how-it-works)** - Process explanation
- **FAQ (/faq)** - Frequently asked questions
- **Support (/support)** - Customer support page with multiple support options

### Service Detail Pages
- **FBA Prep (/services/fba-prep)** - Amazon FBA preparation services
- **FBM Fulfillment (/services/fbm-fulfillment)** - Fulfillment by Merchant services
- **Truck Dispatching (/services/truck-dispatching)** - Truck dispatch services
- **Load Finding (/services/load-finding)** - Load board and freight matching
- **Route Planning (/services/route-planning)** - Route optimization services
- **Billing & Invoicing (/services/billing-invoicing)** - Financial management services
- **Document Management (/services/document-management)** - Document handling services

### API Endpoints (Not in public sitemap)
- `/api/contact` - Contact form submission
- `/api/quotes/calculate` - Quote calculation
- `/api/quotes/email` - Quote email sending
- `/api/support/account` - Account support requests
- `/api/support/feedback` - Feedback submissions
- `/api/support/complaint` - Complaint submissions

## SEO Priorities
- **Priority 1.0**: Home page
- **Priority 0.9**: Services overview, Quote page
- **Priority 0.8**: About, Contact, Pricing, Individual service pages
- **Priority 0.7**: How It Works, Support
- **Priority 0.6**: FAQ

## Update Frequency
- **Weekly**: Home, Services overview
- **Monthly**: All other pages

## Notes
- XML sitemap is located at `/public/sitemap.xml`
- All pages are responsive and mobile-friendly
- Service pages follow consistent structure and design patterns
- Support page includes multiple contact methods (account, feedback, complaints)