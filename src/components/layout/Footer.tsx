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
            <span className="text-lg font-bold text-[#2e3192]">Simba Dispatch Services LLC</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Professional truck dispatching services. Office in Orlando, FL. Business hours: 7 days a week, 8am - 5pm EST.</p>
          <div className="flex items-center gap-2 text-gray-800">
            <Mail className="w-5 h-5 text-gray-600" />
            <Link href="mailto:simbadispatchservices@gmail.com" className="text-sm hover:underline">
              simbadispatchservices@gmail.com
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
              <Link href="/services/document-management" className="hover:underline">
                Doucument Management
              </Link>
            </li>
            <li>
              <Link href="/services/billing-invoicing" className="hover:underline">
                Billing & Invoicing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Load Finding
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Route Planning
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
              <Link href="/dashboard" className="hover:underline">
                Customer Portal
              </Link>
            </li>
            <li>
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/auth/register" className="hover:underline">
                Register
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
            © 2025 Simba Dispatch Services LLC. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Professional dispatching services across the USA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
