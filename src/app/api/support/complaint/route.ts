import { NextRequest, NextResponse } from 'next/server';
import { generateReferenceNumber, validateRequiredFields, queueEmails, createApiResponse, createErrorResponse, PerformanceTimer } from '@/lib/formUtils';
import { EmailPayload } from '@/lib/emailService';

interface ComplaintRequest {
  name: string;
  email: string;
  phone?: string;
  serviceType: 'truck-dispatch' | '3pl-services' | 'fba-prep' | 'other';
  complaintCategory: 'service-quality' | 'billing' | 'communication' | 'delivery' | 'other';
  description: string;
  orderNumber?: string;
}

export async function POST(request: NextRequest) {
  const timer = new PerformanceTimer();
  
  try {
    const complaintData: ComplaintRequest = await request.json();
    timer.log('JSON parsing');

    // Validate required fields
    const requiredFields = ['name', 'email', 'serviceType', 'complaintCategory', 'description'];
    const missingFields = validateRequiredFields(complaintData, requiredFields);
    
    if (missingFields.length > 0) {
      console.error('Complaint validation failed:', { missingFields, receivedData: Object.keys(complaintData) });
      const { response, statusCode } = createErrorResponse(`Missing required fields: ${missingFields.join(', ')}`, 400);
      return NextResponse.json(response, { status: statusCode });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(complaintData.email)) {
      console.error('Invalid email format:', complaintData.email);
      const { response, statusCode } = createErrorResponse('Invalid email format', 400);
      return NextResponse.json(response, { status: statusCode });
    }
    timer.log('Validation');

    const referenceNumber = generateReferenceNumber('COMP');

    // Prepare email content for support team
    const emailContent = `
CUSTOMER COMPLAINT - URGENT ATTENTION REQUIRED

Reference Number: ${referenceNumber}
Submitted: ${new Date().toLocaleString()}

CUSTOMER INFORMATION:
Name: ${complaintData.name}
Email: ${complaintData.email}
Phone: ${complaintData.phone || 'Not provided'}

COMPLAINT DETAILS:
Service Type: ${complaintData.serviceType.replace('-', ' ').toUpperCase()}
Complaint Category: ${complaintData.complaintCategory.replace('-', ' ').toUpperCase()}
Order Number: ${complaintData.orderNumber || 'Not provided'}

COMPLAINT DESCRIPTION:
${complaintData.description}

---
REQUIRED ACTIONS:
1. Acknowledge receipt within 2 hours
2. Investigate the issue immediately
3. Contact customer within 24 hours with resolution plan
4. Update complaint tracking system

This complaint was submitted through the Simba Dispatch Services LLC website.
Please review and respond promptly.
    `;

    // Prepare confirmation email for customer
    const confirmationEmail = `
Dear ${complaintData.name},

Thank you for bringing this matter to our attention. We take all customer complaints seriously and are committed to resolving your concerns promptly.

COMPLAINT DETAILS:
Reference Number: ${referenceNumber}
Service Type: ${complaintData.serviceType.replace('-', ' ')}
Submitted: ${new Date().toLocaleString()}

WHAT HAPPENS NEXT:
• Your complaint has been assigned reference number: ${referenceNumber}
• Our customer service team will investigate your concern
• You will receive an update within 24 hours
• We will work diligently to resolve this matter to your satisfaction

If you need immediate assistance, please call our support line at (407) 555-0123.

We apologize for any inconvenience and appreciate your patience as we work to resolve this matter.

Best regards,
Customer Support Team
Simba Dispatch Services LLC
Email: support@simbadispatch.com
Phone: (407) 555-0123

---
Please keep this reference number for your records: ${referenceNumber}
    `;

    // Queue emails for background processing (non-blocking)
    const emailPayloads: EmailPayload[] = [
      {
        to: process.env.EMAIL_TO!,
        cc: process.env.EMAIL_MANAGEMENT || process.env.EMAIL_TO,
        subject: `[COMPLAINT] ${referenceNumber} - ${complaintData.complaintCategory.replace('-', ' ')}`,
        text: emailContent,
        replyTo: complaintData.email
      },
      {
        to: complaintData.email,
        subject: `Complaint Received - Reference #${referenceNumber}`,
        text: confirmationEmail
      }
    ];

    const jobIds = queueEmails(emailPayloads);
    timer.log('Email queuing');
    console.log(`Queued ${emailPayloads.length} emails with job IDs:`, jobIds);

    // Return immediate response (fast!)
    const totalTime = timer.elapsed();
    console.log(`Complaint API total response time: ${totalTime}ms`);

    return NextResponse.json(createApiResponse(true, 'Complaint submitted successfully', {
      referenceNumber: referenceNumber
    }));

  } catch (error) {
    console.error('Complaint submission error:', error);
    const { response, statusCode } = createErrorResponse('Failed to submit complaint');
    return NextResponse.json(response, { status: statusCode });
  }
}