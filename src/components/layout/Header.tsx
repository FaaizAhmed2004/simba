"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2A3042] py-2 text-white text-sm hidden md:block">
        <div className="container mx-auto flex justify-end items-center space-x-4 px-4">
          <div className="flex items-center space-x-2">
            <Image src="/flag.png" alt="US Flag" width={24} height={16} className="rounded" />
            <span>USA</span>
          </div>
          <Link href="#" className="hover:underline">
            Locations
          </Link>
          <Link href="/auth/login" className="hover:underline">
          login
          </Link>
          <Link href="/services" className="hover:underline">
            services
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQs
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 flex-wrap gap-4 ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#2e3192] p-2 rounded-md">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#2e3192] font-bold text-lg">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#2e3192]">Simba Dispatch LLC</span>
                <span className="text-xs font-semibold text-[#2e3192] tracking-wider">LOGISTICS</span>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-gray-700 font-medium flex-wrap md:flex-nowrap">
            <Link href="/how-it-works" className="hover:text-[#4270F5]">
              How it works
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-[#4270F5]">
                Services <span className="ml-1">▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/services/fba-prep">
                  <DropdownMenuItem>FBA Prep Services</DropdownMenuItem>
                </Link>
                <Link href="/services/fbm-fulfillment">
                  <DropdownMenuItem>FBM Fulfillment</DropdownMenuItem>
                </Link>
                <Link href="/services/truck-dispatching">
                  <DropdownMenuItem>Truck Dispatching</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/pricing" className="hover:text-[#4270F5]">
              Pricing
            </Link>
            <Link href="/quote" className="hover:text-[#4270F5]">
              Get Quote
            </Link>
          </div>

          {/* Contact Info and Button */}
          <div className="flex items-center space-x-4 flex-wrap md:flex-nowrap">
            <div className="flex items-center space-x-2">
              <Phone className="text-[#4270F5] w-5 h-5" />
              <div className="flex flex-col text-sm">
                <span className="font-bold text-gray-800">1.410.831.1883</span>
                <span className="text-gray-600">
                  Mon-Fri | <span className="text-[#4270F5]">10AM-5PM EST</span>
                </span>
              </div>
            </div>
            <Link href="/contact">
            <Button className="bg-[#4270F5] hover:bg-blue-700 text-white px-6 py-2 rounded-md">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;
