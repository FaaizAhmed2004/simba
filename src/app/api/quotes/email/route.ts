import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  additionalNotes: string;
  // Truck dispatching fields
  mcNumber?: string;
  dotNumber?: string;
  truckType?: string;
  useFactoringCompany?: string;
  truckOperationType?: string[];

  weight?: number;
  specialRequirements?: string;
  // FBA Prep fields
  monthlyVolume?: string;
  packagingRequirements?: string;
  storageNeeded?: boolean;
  qualityInspection?: boolean;
  returnProcessing?: boolean;
  // FBM Fulfillment fields
  orderVolume?: string;
  packagingType?: string;
  returnHandling?: boolean;
  customBranding?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const quoteData: QuoteRequest = await request.json();

    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.phone || !quoteData.serviceType) {
      return NextResponse.json(
        { success: false, error: { message: 'Missing required fields' } },
        { status: 400 }
      );
    }

    // Create email content based on service type
    let serviceDetails = '';

    if (quoteData.serviceType === 'TRUCK_DISPATCHING') {
      serviceDetails = `
BUSINESS INFORMATION:
MC Number: ${quoteData.mcNumber || 'Not provided'}
DOT Number: ${quoteData.dotNumber || 'Not provided'}
Truck Type: ${quoteData.truckType || 'Not specified'}
Uses Factoring Company: ${quoteData.useFactoringCompany || 'Not specified'}
Operation Type: ${quoteData.truckOperationType?.join(', ') || 'Not specified'}
`;
    } else if (quoteData.serviceType === 'FBA_PREP') {
      serviceDetails = `
FBA PREP DETAILS:
Monthly Volume: ${quoteData.monthlyVolume || 'Not specified'}
Packaging Requirements: ${quoteData.packagingRequirements || 'Not specified'}
Storage Needed: ${quoteData.storageNeeded ? 'Yes' : 'No'}
Quality Inspection: ${quoteData.qualityInspection ? 'Yes' : 'No'}
Return Processing: ${quoteData.returnProcessing ? 'Yes' : 'No'}`;
    } else if (quoteData.serviceType === 'FBM_FULFILLMENT') {
      serviceDetails = `
FBM FULFILLMENT DETAILS:
Monthly Order Volume: ${quoteData.orderVolume || 'Not specified'}
Packaging Type: ${quoteData.packagingType || 'Not specified'}
Return Handling: ${quoteData.returnHandling ? 'Yes' : 'No'}
Custom Branding: ${quoteData.customBranding ? 'Yes' : 'No'}`;
    }

    const emailContent = `
New Quote Request - Simba Dispatch LLC

CONTACT INFORMATION:
Name: ${quoteData.name}
Email: ${quoteData.email}
Phone: ${quoteData.phone}
Company: ${quoteData.company || 'Not provided'}

SERVICE REQUESTED:
Service Type: ${quoteData.serviceType.replace(/_/g, ' ')}

${serviceDetails}

ADDITIONAL INFORMATION:
Additional Notes: ${quoteData.additionalNotes || 'None'}

---
This quote request was submitted through the Simba Dispatch Services LLC website.
Please respond within 24 hours.
    `;

    // Create a simple transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    try {
      // Send email to business
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Quote Request - ${quoteData.serviceType.replace('_', ' ')}`,
        text: emailContent,
        replyTo: quoteData.email
      });

      // Send confirmation email to customer
      const confirmationEmail = `
Dear ${quoteData.name},

Thank you for your quote request with Simba Dispatch Services LLC!

We have received your request for ${quoteData.serviceType.replace(/_/g, ' ')} services and our team will review your requirements shortly.

WHAT'S NEXT:
• Our logistics team will review your requirements
• We'll prepare a customized quote for your needs  
• You'll receive a detailed proposal within 24 hours
• We'll schedule a call to discuss your specific needs

If you have any immediate questions, please don't hesitate to contact us.

Best regards,
Simba Dispatch Services LLC Team
Phone:+1 4107555627
Email: ${process.env.EMAIL_TO}

---
This is an automated confirmation. Please do not reply to this email.
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: quoteData.email,
        subject: 'Quote Request Confirmation - Simba Dispatch LLC',
        text: confirmationEmail
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      // Continue execution even if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully'
    });

  } catch (error) {
    console.error('Quote email error:', error);
    return NextResponse.json(
      { success: false, error: { message: 'Failed to send quote request' } },
      { status: 500 }
    );
  }
}