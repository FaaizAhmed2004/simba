"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-2xl">
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#2e3192] text-white font-bold">
            1
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-[#2e3192] ml-2" />
          </div>
          <span className="text-sm font-medium text-[#2e3192]">Contact Info</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold">
            2
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gray-200 ml-2" />
          </div>
          <span className="text-sm font-medium text-gray-500">Channels/Products</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold">
            3
          </div>
          <span className="text-sm font-medium text-gray-500">Requirements</span>
        </div>
      </div>

      {/* Contact Form Card */}
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800">Contact Info</CardTitle>
          <p className="text-sm text-gray-500 text-right">Step 1 of 3</p>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input id="name" placeholder="e.g., John Smith" required />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" placeholder="name@company.com" required />
            </div>

            {/* Company Name Field */}
            <div className="space-y-2">
              <Label htmlFor="company-name">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input id="company-name" placeholder="Your Company" required />
            </div>

            {/* Years in Business Field */}
            <div className="space-y-2">
              <Label htmlFor="years-in-business">
                Years in Business <span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">{"0-1 year"}</SelectItem>
                  <SelectItem value="1-3">{"1-3 years"}</SelectItem>
                  <SelectItem value="3-5">{"3-5 years"}</SelectItem>
                  <SelectItem value="5+">{"5+ years"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </Label>
              <div className="relative flex items-center">
                <Select defaultValue="US">
                  <SelectTrigger className="w-20 border-r-0 rounded-r-none focus:ring-0 focus:ring-offset-0">
                    <SelectValue>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/placeholder.svg?height=16&width=24"
                          alt="US Flag"
                          width={24}
                          height={16}
                          className="object-contain"
                        />
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/placeholder.svg?height=16&width=24"
                          alt="US Flag"
                          width={24}
                          height={16}
                          className="object-contain"
                        />
                        <span>US</span>
                      </div>
                    </SelectItem>
                    {/* Add more country options as needed */}
                  </SelectContent>
                </Select>
                <Input id="phone" type="tel" placeholder="123 456 7890" className="flex-1 rounded-l-none" required />
              </div>
            </div>

            {/* Extension Number Field */}
            <div className="space-y-2">
              <Label htmlFor="extension">Extension Number</Label>
              <Input id="extension" placeholder="x123" />
            </div>

            {/* Next Button */}
            <div className="md:col-span-2 flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-[#2e3192] hover:bg-[#2e3192]/90 text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
