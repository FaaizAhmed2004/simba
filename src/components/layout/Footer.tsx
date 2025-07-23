import Link from "next/link"
import {
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/simbaDispatch.png"
              alt="Simba Dispatch LLC Logo"
              width={65}
              height={65}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <Image
                src="/simbaDispatch.png"
                alt="Simba Logo"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-lg font-bold text-[#2e3192]">Simba Dispatch LLC</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Professional logistics & fulfillment services including truck dispatching, FBA prep, and FBM fulfillment. Office in Orlando, FL. Business hours: 7 days a week, 8am - 5pm EST.</p>
          <div className="flex items-center gap-2 text-gray-800">
            <Mail className="w-5 h-5 text-gray-600" />
            <Link href="mailto:Simbadispatchservllc@gmail.com" className="text-sm hover:underline">
              Simbadispatchservllc@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-sm">Business Hours: 8am - 5pm EST</span>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-gray-800">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:underline">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-gray-800">Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/services/truck-dispatching" className="hover:underline">
                Truck Dispatching
              </Link>
            </li>
            <li>
              <Link href="/services/fba-prep" className="hover:underline">
                FBA Prep Services
              </Link>
            </li>
            <li>
              <Link href="/services/fbm-fulfillment" className="hover:underline">
                FBM Fulfillment
              </Link>
            </li>
            <li>
              <Link href="/services/load-finding" className="hover:underline">
                Load Finding
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-gray-800">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:underline">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-gray-800">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Simba Dispatch LLC. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Professional logistics & fulfillment services across the USA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
