import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CircleCheck, CircleX, HelpCircle, Search, TruckIcon, Clock, Users, Settings, RefreshCw, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 text-white">
            SIMBA LOGISTICS makes direct-to-consumer fulfillment easy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl text-center">
            Experience the difference with our comprehensive logistics solutions designed to streamline your operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
          <div className="flex flex-col gap-4 bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl text-white font-semibold">WITHOUT Simba</h3>
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <CircleX className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <div className="h-1 w-20 bg-red-500/30 mb-4 rounded-full"></div>
            
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Team-less Knowledge Required</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Orders Shipped After 24 Hours</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Ticket-Style Support</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Limited Order Customization</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Cannot Handle Returns</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">No Inventory Tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Inconsistent Delivery Times</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">WITH Simba</h3>
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <CircleCheck className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="h-1 w-20 bg-green-500/30 mb-4 rounded-full"></div>
            
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Direct Integrations with Major Platforms</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Orders before 2PM ship same-day</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Dedicated Account Managers</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Custom Shipping and Fulfillment Rules</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Seamless Returns Processing</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Real-time Inventory Tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Guaranteed Delivery Windows</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <TruckIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Shipping</h3>
            <p className="text-gray-300 text-sm">Same-day shipping for orders placed before 2PM</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
            <p className="text-gray-300 text-sm">Personal account managers for every client</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
            <p className="text-gray-300 text-sm">Tailored logistics solutions for your business</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
            <p className="text-gray-300 text-sm">Detailed reporting and performance insights</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">Knowledge Base</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl text-center mb-12">
            Get answers to common questions about our logistics and fulfillment services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                What integrations do you support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We support direct integrations with all major e-commerce platforms including Shopify, Amazon, WooCommerce, 
                Walmart, Etsy, eBay, BigCommerce, Wix, and TikTok Shop. Our team can also develop custom integrations 
                for proprietary systems as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                How often do orders get pulled?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Orders are pulled automatically and continuously throughout the day to ensure same-day shipping for
                orders placed before our 2PM cutoff time. Our system checks for new orders every 15 minutes, ensuring
                minimal delay between order placement and processing.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                Do you have an API connection available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, we offer a robust API connection for custom integrations and advanced automation. Our RESTful API 
                provides endpoints for order management, inventory tracking, shipping status updates, and reporting. 
                Comprehensive documentation and developer support are available to ensure smooth implementation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                What WMS software do you use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We utilize a proprietary Warehouse Management System (WMS) designed specifically for e-commerce fulfillment.
                Our system combines efficiency and scalability with real-time inventory management, order processing, 
                and reporting capabilities. The WMS is cloud-based and accessible to clients through a secure portal.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                What storage options do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We offer flexible storage solutions including pallet storage, shelving, and bin locations, all tailored to
                your product specifications. Our climate-controlled facilities can accommodate standard goods, fragile items,
                and temperature-sensitive products. Storage fees are transparent and consistent year-round, with no seasonal
                rate increases.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                How do you handle returns?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Our returns management process is comprehensive and customizable. We can receive, inspect, and process returns
                according to your specifications. Options include restocking sellable items, disposing of damaged goods, or
                forwarding returns to your facility. All returns are documented with photos and condition reports accessible
                through our client portal.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                What shipping carriers do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We partner with all major carriers including USPS, UPS, FedEx, DHL, and regional carriers to provide the most
                cost-effective and efficient shipping solutions. Our volume discounts are passed directly to you, and our
                shipping algorithm automatically selects the optimal carrier based on package dimensions, weight, destination,
                and delivery timeframe requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/faq" className="bg-black hover:bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center w-full sm:w-auto">
              View All FAQs
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center w-full sm:w-auto">
              Ask a Question
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-gray-400">
              Have additional questions? Contact our support team at{" "}
              <a href="mailto:cs@simbadispatchservices.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              cs@simbadispatchservices.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
