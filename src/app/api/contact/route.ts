import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/emailService';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: { message: 'Missing required fields: name, email, phone, and message are required' } },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: { message: 'Invalid email format' } },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { error: { message: 'Email service not configured. Please contact us directly at cs@simbadispatchservices.com' } },
        { status: 500 }
      );
    }

    // Log the contact form submission
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message.substring(0, 100) + '...', // Log first 100 chars of message
      submittedAt: new Date().toISOString()
    });

    // Create email content for admin notification
    const adminEmailContent = `
New Contact Form Submission - Simba Dispatch Services LLC

CONTACT INFORMATION:
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}

MESSAGE:
${body.message}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
This message was submitted through the Simba Dispatch Services LLC website contact form.
Reply directly to this email to respond to the customer.
    `;

    // Create confirmation email content for user
    const userConfirmationContent = `
Thank you for contacting Simba Dispatch Services LLC!

Dear ${body.name},

We have received your inquiry and will get back to you within 12-24 hours during business hours.

Your contact information:
Email: ${body.email}
Phone: ${body.phone}

If you need immediate assistance, please call us at +1 (410) 755-5627.

Best regards,
Simba Dispatch Services LLC Team
Orlando, FL
cs@simbadispatchservices.com

---
This is an automated confirmation email. Please do not reply to this message.
    `;

    try {
      // Send admin notification email first
      await emailService.sendEmail({
        to: process.env.EMAIL_TO!,
        subject: `New Contact Form Inquiry - ${body.name}`,
        text: adminEmailContent,
        replyTo: body.email
      });

      // Send user confirmation email
      await emailService.sendEmail({
        to: body.email,
        subject: 'Thank you for contacting Simba Dispatch Services LLC',
        text: userConfirmationContent
      });

      console.log('Contact form emails sent successfully');
    } catch (error) {
      console.error('Failed to send contact form emails:', error);
      
      // In production, still return success to user but log the error
      if (process.env.NODE_ENV === 'production') {
        console.error('Email failed in production, but returning success to user');
        return NextResponse.json(
          { 
            success: true, 
            message: 'Thank you for your message! We will get back to you within 12-24 hours during business hours.'
          },
          { status: 200 }
        );
      }
      
      // In development, return the actual error
      return NextResponse.json(
        { 
          error: { 
            message: 'Failed to send email. Please try again or contact us directly at cs@simbadispatchservices.com' 
          } 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you within 12-24 hours during business hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: { message: 'Internal server error. Please try again or contact us directly at cs@simbadispatchservices.com' } },
      { status: 500 }
    );
  }
}