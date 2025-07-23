"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setIsServicesOpen(false)
  }

  const services = [
    { name: 'Complete Truck Dispatching', href: '/services/truck-dispatching' },
    { name: 'FBA Prep Services', href: '/services/fba-prep' },
    { name: 'FBM Fulfillment', href: '/services/fbm-fulfillment' }
  ]

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2A3042] py-2 text-white text-sm hidden md:block">
        <div className="container mx-auto flex justify-end items-center space-x-4 px-4">
          <div className="flex items-center space-x-2">
            <Image src="/flag.png" alt="US Flag" width={24} height={16} className="rounded" />
            <span>USA</span>
          </div>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/quote" className="hover:underline">
            Get Quote
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQs
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded flex items-center justify-center shadow-sm">
                  <Image
                    src="/simbaDispatch.png"
                    alt="Simba Dispatch LLC Logo"
                    width={40}
                    height={40}
                    className="object-contain sm:w-14 sm:h-14"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-lg sm:text-xl font-bold text-[#2e3192]">Simba Dispatch Service LLC</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation Links - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
              <Link href="/how-it-works" className="hover:text-[#4270F5] whitespace-nowrap">
                How it works
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  title="btn"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 hover:text-[#4270F5] whitespace-nowrap focus:outline-none"
                  aria-expanded={isServicesOpen ? "true" : "false"}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <>
                    {/* Backdrop to close dropdown when clicking outside */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={handleClickOutside}
                    ></div>

                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-200 z-50 py-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4270F5] transition-colors duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-3 text-sm text-[#4270F5] font-medium hover:bg-gray-100 transition-colors duration-150"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link href="/about" className="hover:text-[#4270F5] whitespace-nowrap">
                About Us
              </Link>
            </div>

            {/* Contact Info and Button */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <div className="hidden lg:flex items-center space-x-2">
                <Phone className="text-[#4270F5] w-4 h-4 sm:w-5 sm:h-5" />
                <div className="flex flex-col text-xs sm:text-sm">
                  <span className="font-bold text-gray-800 whitespace-nowrap">Orlando, FL Office</span>
                  <span className="text-gray-600 whitespace-nowrap">
                    7 Days | <span className="text-[#4270F5]">8AM-5PM EST</span>
                  </span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-[#4270F5] hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base whitespace-nowrap">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation - Shown only on mobile */}
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link href="/how-it-works" className="text-gray-700 hover:text-[#4270F5] text-sm px-2 py-1">
                How it works
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#4270F5] text-sm px-2 py-1">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#4270F5] text-sm px-2 py-1">
                About Us
              </Link>
              <Link href="/quote" className="text-gray-700 hover:text-[#4270F5] text-sm px-2 py-1">
                Get Quote
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#4270F5] text-sm px-2 py-1">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;
