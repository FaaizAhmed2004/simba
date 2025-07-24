import Link from "next/link"
import {
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-12 px-4 md:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center">
                <Image
                  src="/simbaDispatch.png"
                  alt="Simba Logo"
                  width={20}
                  height={20}
                  className="object-contain sm:w-6 sm:h-6"
                />
              </div>
              <span className="text-base sm:text-lg font-bold text-white">Simba Dispatch Services LLC</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">Professional 3pl and truck dispatch Services</p>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-5 h-5 text-gray-400" />
            <a href="mailto:cs@simbadispatchservices.com" className="text-sm hover:underline">
              cs@simbadispatchservices.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-sm">Business Hours: 8am - 5pm EST</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a href="https://www.instagram.com/simbadispatchservices" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              instagram.com/simbadispatchservices
            </a>
          </div>

        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline hover:text-blue-400">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:underline hover:text-blue-400">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/services/truck-dispatching" className="hover:underline hover:text-blue-400">
                Truck Dispatch
              </Link>
            </li>
            <li>
              <Link href="/services/fba-prep" className="hover:underline hover:text-blue-400">
                FBA Prep Services
              </Link>
            </li>
            <li>
              <Link href="/services/fbm-fulfillment" className="hover:underline hover:text-blue-400">
                FBM Fulfillment
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/contact" className="hover:underline hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline hover:text-blue-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:underline hover:text-blue-400">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline hover:text-blue-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Simba Dispatch LLC. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <a href="https://www.instagram.com/simbadispatchservices" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Professional 3pl and Dispatch services across the USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
