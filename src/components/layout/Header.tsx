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
          <Link href="/support" className="hover:underline cursor-pointer">
            Customer Support
          </Link>
          <Link href="/faq" className="hover:underline cursor-pointer">
            FAQs
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black py-4 shadow-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                <div className="w-8 h-8 bg-transparent rounded flex items-center justify-center">
                  <Image
                    src="/simba.jpg"
                    alt="Simba Dispatch Services LLC"
                    width={50}
                    height={50}
                    className="object-contain hover:opacity-80 transition-opacity"
                    style={{
                      filter: 'invert(1) brightness(2) contrast(1)',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-lg sm:text-xl font-bold text-white">Simba Dispatch Services</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation Links - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-300 font-medium">
              <Link href="/how-it-works" className="hover:text-[#4270F5] whitespace-nowrap cursor-pointer">
                How it works
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
              <button
                type="button"
               title="btn"
               onClick={() => setIsServicesOpen(!isServicesOpen)}
                   className="flex items-center space-x-1 hover:text-[#4270F5] whitespace-nowrap focus:outline-none cursor-pointer"
                aria-expanded={isServicesOpen}
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
                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-xl border border-gray-800 z-50 py-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors duration-150 cursor-pointer"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-800 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-3 text-sm text-blue-400 font-medium hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link href="/about" className="hover:text-[#4270F5] whitespace-nowrap cursor-pointer">
                About Us
              </Link>
              <Link href="/quote" className="hover:text-[#4270F5] whitespace-nowrap cursor-pointer">
                Get Qoute
              </Link>
            </div>

            {/* Contact Info and Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <div className="hidden lg:flex items-center space-x-2">
                <Phone className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                <div className="flex flex-col text-xs sm:text-sm">
                  <span className="font-bold text-white whitespace-nowrap">Orlando, FL 32821</span>
                  <span className="text-gray-300 whitespace-nowrap">
                    7 Days | <span className="text-blue-400">8AM-5PM EST</span>
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">

                <Link href="/contact" className="cursor-pointer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base whitespace-nowrap cursor-pointer">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Shown only on mobile */}
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link href="/how-it-works" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
                How it works
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
                About Us
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
                Support
              </Link>
              <Link href="/quote" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
                Get Quote
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 text-sm px-2 py-1 cursor-pointer">
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
