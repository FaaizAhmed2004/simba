import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceInterest?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      subject: body.subject,
      message: body.message,
      serviceInterest: body.serviceInterest,
      submittedAt: new Date().toISOString()
    });

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

    // Create email content
    const emailContent = `
New Contact Form Submission - Simba Dispatch LLC

CONTACT INFORMATION:
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Company: ${body.company || 'Not provided'}
Service Interest: ${body.serviceInterest || 'Not specified'}

SUBJECT: ${body.subject}

MESSAGE:
${body.message}

---
This message was submitted through the Simba Dispatch LLC website contact form.
    `;

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Contact Form: ${body.subject}`,
        text: emailContent,
        replyTo: body.email
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      // Continue execution even if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}