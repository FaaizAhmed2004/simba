import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export interface MultiStepContactData {
  // Contact Info
  name: string;
  email: string;
  companyName: string;
  yearsInBusiness: string;
  phone: string;
  countryCode: string;
  extension: string;
  
  // Channels & Products
  channels: string[];
  productTypes: string[];
  
  // Requirements
  requirements: string;
  additionalNeeds: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: MultiStepContactData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'companyName', 'yearsInBusiness', 'phone'];
    const missingFields = requiredFields.filter(field => !body[field as keyof MultiStepContactData]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Create contact document using Mongoose model
    const contact = new Contact({
      ...body,
      submittedAt: new Date(),
      status: 'new',
      source: 'multistep-form',
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown'
    });

    // Save to database
    const savedContact = await contact.save();

    if (!savedContact._id) {
      throw new Error('Failed to save contact to database');
    }

    // Send notification email (you can implement this later)
    try {
      await sendNotificationEmail({
        ...body,
        submittedAt: savedContact.submittedAt
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: savedContact._id
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

async function sendNotificationEmail(contactData: MultiStepContactData & { submittedAt: Date }) {
  // This is a placeholder for email notification
  // You can implement this using services like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - AWS SES
  // - Resend
  
  console.log('New multistep contact form submission:', {
    name: contactData.name,
    email: contactData.email,
    company: contactData.companyName,
    submittedAt: contactData.submittedAt
  });

  // Example implementation with fetch to an email service:
  /*
  const emailData = {
    to: 'Simbadispatchservllc@gmail.com',
    subject: `New Contact Form Submission - ${contactData.companyName}`,
    html: generateEmailTemplate(contactData)
  };

  const response = await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`
    },
    body: JSON.stringify(emailData)
  });

  if (!response.ok) {
    throw new Error('Failed to send email notification');
  }
  */
}

function generateEmailTemplate(data: MultiStepContactData & { submittedAt: Date }): string {
  return `
    <h2>New Multistep Contact Form Submission</h2>
    
    <h3>Contact Information</h3>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Company:</strong> ${data.companyName}</li>
      <li><strong>Years in Business:</strong> ${data.yearsInBusiness}</li>
      <li><strong>Phone:</strong> ${data.countryCode} ${data.phone}${data.extension ? ` ext. ${data.extension}` : ''}</li>
    </ul>

    <h3>Sales Channels</h3>
    <ul>
      ${data.channels.map(channel => `<li>${channel}</li>`).join('')}
    </ul>

    <h3>Product Types</h3>
    <ul>
      ${data.productTypes.map(product => `<li>${product}</li>`).join('')}
    </ul>

    <h3>Requirements</h3>
    <p>${data.requirements || 'No specific requirements provided'}</p>

    <h3>Additional Needs</h3>
    <ul>
      ${data.additionalNeeds.map(need => `<li>${need}</li>`).join('')}
    </ul>

    <hr>
    <p><small>Submitted at: ${data.submittedAt.toLocaleString()}</small></p>
  `;
}