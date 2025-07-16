export interface MultiStepFormData {
  // Contact Info
  name: string
  email: string
  companyName: string
  yearsInBusiness: string
  phone: string
  countryCode: string
  extension: string
  
  // Channels & Products
  channels: string[]
  productTypes: string[]
  
  // Requirements
  requirements: string
  additionalNeeds: string[]
}