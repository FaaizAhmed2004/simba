"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Apple as Amazon,
  ShoppingCart as Ebay,
  Store as Shopify,
} from "lucide-react"
import { MultiStepFormData } from "@/types/contact"

interface ChannelsProductsFormProps {
  formData: MultiStepFormData
  updateFormData: (data: Partial<MultiStepFormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export default function ChannelsProductsForm({ formData, updateFormData, onNext, onPrevious }: ChannelsProductsFormProps) {
  const handleChannelChange = (channel: string, checked: boolean) => {
    const updatedChannels = checked 
      ? [...formData.channels, channel]
      : formData.channels.filter(c => c !== channel)
    updateFormData({ channels: updatedChannels })
  }

  const handleProductTypeChange = (productType: string, checked: boolean) => {
    const updatedProductTypes = checked 
      ? [...formData.productTypes, productType]
      : formData.productTypes.filter(p => p !== productType)
    updateFormData({ productTypes: updatedProductTypes })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Select Channels</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="channel-shopify" 
              checked={formData.channels.includes('Shopify')}
              onCheckedChange={(checked) => handleChannelChange('Shopify', checked as boolean)}
            />
            <Label htmlFor="channel-shopify" className="flex items-center gap-2">
              <Shopify className="w-5 h-5 text-green-600" /> Shopify
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="channel-amazon" 
              checked={formData.channels.includes('Amazon')}
              onCheckedChange={(checked) => handleChannelChange('Amazon', checked as boolean)}
            />
            <Label htmlFor="channel-amazon" className="flex items-center gap-2">
              <Amazon className="w-5 h-5 text-orange-500" /> Amazon
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="channel-ebay" 
              checked={formData.channels.includes('eBay')}
              onCheckedChange={(checked) => handleChannelChange('eBay', checked as boolean)}
            />
            <Label htmlFor="channel-ebay" className="flex items-center gap-2">
              <Ebay className="w-5 h-5 text-blue-600" /> eBay
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="channel-website" 
              checked={formData.channels.includes('My Own Website')}
              onCheckedChange={(checked) => handleChannelChange('My Own Website', checked as boolean)}
            />
            <Label htmlFor="channel-website" className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-purple-600" /> My Own Website
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="channel-other" 
              checked={formData.channels.includes('Other')}
              onCheckedChange={(checked) => handleChannelChange('Other', checked as boolean)}
            />
            <Label htmlFor="channel-other">Other</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Product Types</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-apparel" 
              checked={formData.productTypes.includes('Apparel')}
              onCheckedChange={(checked) => handleProductTypeChange('Apparel', checked as boolean)}
            />
            <Label htmlFor="product-apparel">Apparel</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-electronics" 
              checked={formData.productTypes.includes('Electronics')}
              onCheckedChange={(checked) => handleProductTypeChange('Electronics', checked as boolean)}
            />
            <Label htmlFor="product-electronics">Electronics</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-homegoods" 
              checked={formData.productTypes.includes('Home Goods')}
              onCheckedChange={(checked) => handleProductTypeChange('Home Goods', checked as boolean)}
            />
            <Label htmlFor="product-homegoods">Home Goods</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-beauty" 
              checked={formData.productTypes.includes('Beauty & Cosmetics')}
              onCheckedChange={(checked) => handleProductTypeChange('Beauty & Cosmetics', checked as boolean)}
            />
            <Label htmlFor="product-beauty">Beauty & Cosmetics</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-food" 
              checked={formData.productTypes.includes('Food & Beverage')}
              onCheckedChange={(checked) => handleProductTypeChange('Food & Beverage', checked as boolean)}
            />
            <Label htmlFor="product-food">Food & Beverage</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="product-other" 
              checked={formData.productTypes.includes('Other')}
              onCheckedChange={(checked) => handleProductTypeChange('Other', checked as boolean)}
            />
            <Label htmlFor="product-other">Other</Label>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          onClick={onPrevious}
          variant="outline"
          className="px-6 py-2 rounded-md flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </Button>
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