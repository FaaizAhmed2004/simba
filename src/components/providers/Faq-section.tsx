import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CircleCheck, CircleX } from "lucide-react"

export default function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          {"SIMBA DISPATCH makes direct-to-consumer fulfillment easy"}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4">WITHOUT Simba</h3>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Team-less Knowledge Required</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Orders Shipped After 24 Hours</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Ticket-Style Support</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Limited Order Customization</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Can not Handle Returns</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleX className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">No Inventory Tracking</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4">WITH Simba</h3>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Direct Integrations</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Orders before 2PM ship same-day</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Dedicated Account Managers</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Ability to Relay Custom Shipping and Fulfillment Rules</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Accept and Process Returns</p>
            </div>
            <div className="flex items-start gap-2">
              <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Live Inventory Tracking</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                What Integrations do you guys support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We support direct integrations with Shopify, Amazon, WooCommerce, Walmart, Etsy, eBay, BigCommerce, Wix,
                and TikTok.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">How often do orders get pulled?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Orders are pulled automatically and continuously throughout the day to ensure same-day shipping for
                orders placed before our 2PM cutoff time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Do you have an API connection available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, we offer a robust API connection for custom integrations and advanced automation. Please contact
                our sales team for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">What WMS software do you use?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We utilize a proprietary Warehouse Management System (WMS) designed for efficiency and scalability,
                ensuring seamless order processing and inventory management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                What Storage Options do you guys offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We offer flexible storage solutions including pallet storage, shelving, and bin locations, tailored to
                your products needs. Our storage fees are consistent year-round.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-center mt-8">
            <Button className="bg-v0-blue text-white hover:bg-v0-blue/90">View More</Button>
          </div>
          <p className="text-center text-gray-500 mt-4">
            If you have additional questions, you can{" "}
            <a href="mailto:support@shiphype.com" className="text-v0-blue underline">
              email: support@shiphype.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
