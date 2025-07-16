"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { MultiStepFormData } from "@/types/contact"

interface ContactInfoFormProps {
  formData: MultiStepFormData
  updateFormData: (data: Partial<MultiStepFormData>) => void
  onNext: () => void
}

export default function ContactInfoForm({ formData, updateFormData, onNext }: ContactInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="name" 
          placeholder="e.g., John Smith" 
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          required 
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="name@company.com" 
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          required 
        />
      </div>

      {/* Company Name Field */}
      <div className="space-y-2">
        <Label htmlFor="company-name">
          Company Name <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="company-name" 
          placeholder="Your Company" 
          value={formData.companyName}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          required 
        />
      </div>

      {/* Years in Business Field */}
      <div className="space-y-2">
        <Label htmlFor="years-in-business">
          Years in Business <span className="text-red-500">*</span>
        </Label>
        <Select 
          value={formData.yearsInBusiness}
          onValueChange={(value) => updateFormData({ yearsInBusiness: value })}
          required
        >
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
          <Select 
            value={formData.countryCode}
            onValueChange={(value) => updateFormData({ countryCode: value })}
          >
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
          <Input 
            id="phone" 
            type="tel" 
            placeholder="123 456 7890" 
            className="flex-1 rounded-l-none" 
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            required 
          />
        </div>
      </div>

      {/* Extension Number Field */}
      <div className="space-y-2">
        <Label htmlFor="extension">Extension Number</Label>
        <Input 
          id="extension" 
          placeholder="x123" 
          value={formData.extension}
          onChange={(e) => updateFormData({ extension: e.target.value })}
        />
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
  )
}
