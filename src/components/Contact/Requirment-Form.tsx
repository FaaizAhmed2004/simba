"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft } from "lucide-react"
import { MultiStepFormData } from "@/types/contact"

interface RequirementsFormProps {
  formData: MultiStepFormData
  updateFormData: (data: Partial<MultiStepFormData>) => void
  onPrevious: () => void
  onSubmit: () => void
  isSubmitting: boolean
  error: string
}

export default function RequirementsForm({ formData, updateFormData, onPrevious, onSubmit, isSubmitting, error }: RequirementsFormProps) {
  const handleAdditionalNeedChange = (need: string, checked: boolean) => {
    const updatedNeeds = checked 
      ? [...formData.additionalNeeds, need]
      : formData.additionalNeeds.filter(n => n !== need)
    updateFormData({ additionalNeeds: updatedNeeds })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="requirements">Tell us about your specific requirements:</Label>
        <Textarea
          id="requirements"
          placeholder="e.g., I need cold storage for perishable goods, or I require integration with a specific ERP system."
          rows={6}
          value={formData.requirements}
          onChange={(e) => updateFormData({ requirements: e.target.value })}
        />
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Additional Needs</h4>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="need-custom-packaging"
              checked={formData.additionalNeeds.includes('Custom Packaging')}
              onCheckedChange={(checked) => handleAdditionalNeedChange('Custom Packaging', checked as boolean)}
            />
            <Label htmlFor="need-custom-packaging">Custom Packaging</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="need-international-shipping"
              checked={formData.additionalNeeds.includes('International Shipping')}
              onCheckedChange={(checked) => handleAdditionalNeedChange('International Shipping', checked as boolean)}
            />
            <Label htmlFor="need-international-shipping">International Shipping</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="need-returns-management"
              checked={formData.additionalNeeds.includes('Returns Management')}
              onCheckedChange={(checked) => handleAdditionalNeedChange('Returns Management', checked as boolean)}
            />
            <Label htmlFor="need-returns-management">Returns Management</Label>
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
          disabled={isSubmitting}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </Button>
        <Button
          type="submit"
          className="bg-[#2e3192] hover:bg-[#2e3192]/90 text-white px-6 py-2 rounded-md flex items-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  )
}
