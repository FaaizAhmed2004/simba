import Link from "next/link"
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
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
            <span className="text-lg font-bold text-[#2e3192]">Simba Dispatch LLC</span>
            <span className="text-xs font-semibold text-[#2e3192] tracking-wider">FULFILLMENT</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Professional freight shipping and logistics services across the USA.</p>
          <div className="flex items-center gap-2 text-gray-800">
            <Mail className="w-5 h-5 text-gray-600" />
            <Link href="mailto:Simbadispatchservllc@gmail.com" className="text-sm hover:underline">
              Simbadispatchservllc@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <Phone className="w-5 h-5 text-gray-600" />
            <Link href="tel:14108311883" className="text-sm hover:underline">
              1.410.831.1883
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {/* Social Media Icons */}
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#3b5998] text-white">
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-black text-white">
              <Twitter className="w-4 h-4" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] text-white"
            >
              <Instagram className="w-4 h-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0077b5] text-white">
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#ff0000] text-white">
              <Youtube className="w-4 h-4" />
              <span className="sr-only">YouTube</span>
            </Link>
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
              <Link href="/services/truck-dispatching" className="hover:underline">
                Truck Dispatching
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
            © 2025 Simba Dispatch LLC. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Professional logistics services across the USA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
