"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactInfoForm from "./Contact-info"
import ChannelsProductsForm from "./Contact-Product-Form"
import RequirementsForm from "./Requirment-Form"
import { MultiStepFormData } from "@/types/contact"

const initialFormData: MultiStepFormData = {
  name: "",
  email: "",
  companyName: "",
  yearsInBusiness: "",
  phone: "",
  countryCode: "US",
  extension: "",
  channels: [],
  productTypes: [],
  requirements: "",
  additionalNeeds: []
}

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<MultiStepFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const updateFormData = (data: Partial<MultiStepFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact/multistep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData(initialFormData)
        setCurrentStep(1)
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ContactInfoForm 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext} 
          />
        )
      case 2:
        return (
          <ChannelsProductsForm 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext} 
            onPrevious={handlePrevious} 
          />
        )
      case 3:
        return (
          <RequirementsForm 
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            error={error}
          />
        )
      default:
        return (
          <ContactInfoForm 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext} 
          />
        )
    }
  }

  const steps = [
    { id: 1, name: "Contact Info" },
    { id: 2, name: "Channels/Products" },
    { id: 3, name: "Requirements" },
  ]

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardContent className="text-center py-12">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 2-4 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setCurrentStep(1)
                setFormData(initialFormData)
              }}
              className="bg-[#2e3192] hover:bg-[#2e3192]/90 text-white"
            >
              Submit Another Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-2xl">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(step.id)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                currentStep >= step.id ? "bg-[#2e3192] text-white" : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
            >
              {step.id}
              {step.id < steps.length && (
                <div
                  className={`absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 ml-2 ${
                    currentStep > step.id ? "bg-[#2e3192]" : "bg-gray-200"
                  }`}
                />
              )}
            </Button>
            <span className={`text-sm font-medium ${currentStep >= step.id ? "text-[#2e3192]" : "text-gray-500"}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800">{steps[currentStep - 1].name}</CardTitle>
          <p className="text-sm text-gray-500 text-right">
            Step {currentStep} of {steps.length}
          </p>
        </CardHeader>
        <CardContent>{renderFormStep()}</CardContent>
      </Card>
    </div>
  )
}
