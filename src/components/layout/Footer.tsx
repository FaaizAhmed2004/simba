import Link from "next/link"
import {
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Company Info Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col space-y-6">
              {/* Logo and Company Name */}
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-transparent rounded flex items-center justify-center">
                  <Image
                    src="/simba.jpg"
                    alt="Simba Dispatch Services LLC"
                    width={45}
                    height={45}
                    className="object-contain"
                    style={{
                      filter: 'invert(1) brightness(2) contrast(1)',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Simba Dispatch Services LLC</h3>
                  <p className="text-sm text-blue-400">Professional Truck Dispatch Services and 3PL Services Provider</p>
                </div>
              </div>

              {/* Company Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                Professional 3PL and truck dispatch services designed to streamline your  operations and maximize efficiency across the USA.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:cs@simbadispatchservices.com" className="text-sm sm:text-base hover:underline cursor-pointer">
                    cs@simbadispatchservices.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Business Hours: 8AM - 5PM EST</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400 flex-shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <a href="https://www.instagram.com/simbadispatchservices" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:underline cursor-pointer">
                    @simbadispatchservices
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">How it Works</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Get Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/truck-dispatching" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Truck Dispatch</span>
                </Link>
              </li>
              <li>
                <Link href="/services/fba-prep" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">FBA Prep Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/fbm-fulfillment" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">FBM Fulfillment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Customer Support</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group cursor-pointer">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Get Quote</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2025 Simba Dispatch Services LLC. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link href="/" className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</Link>
                <span>•</span>
                <Link href="/" className="hover:text-blue-400 transition-colors cursor-pointer">Terms of Service</Link>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-400 hidden md:block">
                Professional 3PL and Dispatch services across the USA
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/simbadispatchservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
