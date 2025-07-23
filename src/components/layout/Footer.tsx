import Link from "next/link"
import {
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <Image
                src="/simbaDispatch.png"
                alt="Simba Logo"
                width={20}
                height={20}
                className="object-contain sm:w-6 sm:h-6"
              />
              <span className="text-base sm:text-lg font-bold text-[#2e3192]">Simba Dispatch Services LLC</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Professional 3pl and truck dispatch Services</p>
          <div className="flex items-center gap-2 text-gray-800">
            <Mail className="w-5 h-5 text-gray-600" />
            <a href="mailto:cs@simbadispatchservices.com" className="text-sm hover:underline">
              cs@simbadispatchservices.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-sm">Business Hours: 8am - 5pm EST</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <a href="https://www.instagram.com/simbadispatchservices" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              instagram.com/simbadispatchservices
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <a href="https://wa.me/+1234567890?text=Hello!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              WhatsApp: +1 (234) 567-890
            </a>
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
                Truck Dispatch
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
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              Professional 3pl and Dispatch services across the USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
