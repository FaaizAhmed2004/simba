import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  pickup: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  delivery: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    date: string;
  };
  truckType: string;
  weight: number;
  specialRequirements: string;
  additionalNotes: string;
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

    // Create email content
    const emailContent = `
New Quote Request - Simba Dispatch LLC

CONTACT INFORMATION:
Name: ${quoteData.name}
Email: ${quoteData.email}
Phone: ${quoteData.phone}
Company: ${quoteData.company || 'Not provided'}

SERVICE REQUESTED:
Service Type: ${quoteData.serviceType.replace('_', ' ')}

PICKUP DETAILS:
Address: ${quoteData.pickup.address}
City: ${quoteData.pickup.city}
State: ${quoteData.pickup.state}
ZIP Code: ${quoteData.pickup.zipCode}
Date: ${quoteData.pickup.date || 'Not specified'}

DELIVERY DETAILS:
Address: ${quoteData.delivery.address}
City: ${quoteData.delivery.city}
State: ${quoteData.delivery.state}
ZIP Code: ${quoteData.delivery.zipCode}
Date: ${quoteData.delivery.date || 'Not specified'}

LOAD INFORMATION:
Truck Type: ${quoteData.truckType || 'Not specified'}
Weight: ${quoteData.weight ? `${quoteData.weight} lbs` : 'Not specified'}

ADDITIONAL INFORMATION:
Special Requirements: ${quoteData.specialRequirements || 'None'}
Additional Notes: ${quoteData.additionalNotes || 'None'}

---
This quote request was submitted through the Simba Dispatch LLC website.
Please respond within 24 hours.
    `;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

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

Thank you for your quote request with Simba Dispatch LLC!

We have received your request for ${quoteData.serviceType.replace('_', ' ')} services and our team will review your requirements shortly.

WHAT'S NEXT:
• Our dispatch team will review your requirements
• We'll prepare a customized quote for your needs  
• You'll receive a detailed proposal within 24 hours
• We'll schedule a call to discuss your specific needs

If you have any immediate questions, please don't hesitate to contact us.

Best regards,
Simba Dispatch LLC Team
Phone: (407) 555-0123
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