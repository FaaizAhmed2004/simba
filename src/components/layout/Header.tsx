"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: 'Truck Dispatching', href: '/services/truck-dispatching' },
    { name: 'Load Finding', href: '/services/load-finding' },
    { name: 'Route Planning', href: '/services/route-planning' },
    { name: 'Billing & Invoicing', href: '/services/billing-invoicing' }
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
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center shadow-sm">
                  <Image
                    src="/simbaDispatch.png"
                    alt="Simba Dispatch LLC Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#2e3192]">Simba Dispatch Services LLC</span>
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
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 hover:text-[#4270F5] whitespace-nowrap"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4270F5]"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm text-[#4270F5] font-medium hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/about" className="hover:text-[#4270F5] whitespace-nowrap">
                About Us
              </Link>
            </div>

            {/* Contact Info and Button */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="text-[#4270F5] w-5 h-5" />
                <div className="flex flex-col text-sm">
                  <span className="font-bold text-gray-800 whitespace-nowrap">Orlando, FL Office</span>
                  <span className="text-gray-600 whitespace-nowrap">
                    7 Days | <span className="text-[#4270F5]">8AM-5PM EST</span>
                  </span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-[#4270F5] hover:bg-blue-700 text-white px-4 py-2 rounded-md whitespace-nowrap">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation - Shown only on mobile */}
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/how-it-works" className="text-gray-700 hover:text-[#4270F5] text-sm">
                How it works
              </Link>
              <Link href="/services/truck-dispatching" className="text-gray-700 hover:text-[#4270F5] text-sm">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#4270F5] text-sm">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;
