import { NextRequest, NextResponse } from 'next/server';
import { generateReferenceNumber, validateRequiredFields, queueEmails, createApiResponse, createErrorResponse, PerformanceTimer } from '@/lib/formUtils';
import { EmailPayload } from '@/lib/emailService';

interface AccountRequest {
  name: string;
  email: string;
  accountNumber?: string;
  requestType: 'billing-inquiry' | 'service-modification' | 'account-update' | 'cancellation' | 'other';
  description: string;
  preferredContactMethod: 'email' | 'phone';
  phone?: string;
}

export async function POST(request: NextRequest) {
  const timer = new PerformanceTimer();
  
  try {
    const accountData: AccountRequest = await request.json();
    timer.log('JSON parsing');

    // Validate required fields
    const requiredFields = ['name', 'email', 'requestType', 'description', 'preferredContactMethod'];
    const missingFields = validateRequiredFields(accountData, requiredFields);
    
    if (missingFields.length > 0) {
      const { response, statusCode } = createErrorResponse(`Missing required fields: ${missingFields.join(', ')}`, 400);
      return NextResponse.json(response, { status: statusCode });
    }
    timer.log('Validation');

    const referenceNumber = generateReferenceNumber('ACCT');

    // Prepare email content for account management team
    const emailContent = `
ACCOUNT MANAGEMENT REQUEST

Reference Number: ${referenceNumber}
Submitted: ${new Date().toLocaleString()}

CUSTOMER INFORMATION:
Name: ${accountData.name}
Email: ${accountData.email}
Phone: ${accountData.phone || 'Not provided'}
Account Number: ${accountData.accountNumber || 'Not provided'}

REQUEST DETAILS:
Request Type: ${accountData.requestType.replace('-', ' ').toUpperCase()}
Preferred Contact Method: ${accountData.preferredContactMethod.toUpperCase()}

REQUEST DESCRIPTION:
${accountData.description}

---
PROCESSING INSTRUCTIONS:
1. Verify customer identity using provided information
2. Review account details and history
3. Process request according to company policies
4. Contact customer via preferred method within 24 hours
5. Update account management system with resolution

${accountData.requestType === 'billing-inquiry' ? 'BILLING TEAM: Please review account billing history and resolve any discrepancies.' : ''}
${accountData.requestType === 'cancellation' ? 'RETENTION TEAM: Please follow cancellation procedures and attempt retention if appropriate.' : ''}
${accountData.requestType === 'service-modification' ? 'OPERATIONS TEAM: Please review current service level and modification feasibility.' : ''}

This request was submitted through the Simba Dispatch Services LLC website.
Please review and respond promptly.
    `;

    // Prepare confirmation email for customer
    const confirmationEmail = `
Dear ${accountData.name},

Thank you for contacting us regarding your account. We have received your request and our account management team will assist you promptly.

REQUEST DETAILS:
Reference Number: ${referenceNumber}
Request Type: ${accountData.requestType.replace('-', ' ')}
Submitted: ${new Date().toLocaleString()}

WHAT HAPPENS NEXT:
• Your request has been assigned reference number: ${referenceNumber}
• Our account management team will review your request
• We will contact you via ${accountData.preferredContactMethod} within 24 hours
• Any necessary account changes will be processed securely

${accountData.requestType === 'billing-inquiry' ? 
  'BILLING INQUIRY: Our billing team will review your account and provide detailed information about any charges or discrepancies.' :
  accountData.requestType === 'service-modification' ?
  'SERVICE MODIFICATION: Our operations team will review your current service level and discuss available modification options.' :
  accountData.requestType === 'cancellation' ?
  'CANCELLATION REQUEST: Our customer retention team will contact you to discuss your cancellation request and explore any alternatives that might better meet your needs.' :
  'ACCOUNT UPDATE: Our team will process your account update request and confirm all changes with you before implementation.'
}

IMPORTANT PRIVACY NOTICE:
For your security, we will verify your identity before making any account changes. Please have your account information ready when we contact you.

If you need immediate assistance, please call our account management line at (407) 555-0123.

Best regards,
Account Management Team
Simba Dispatch Services LLC
Email: accounts@simbadispatch.com
Phone: (407) 555-0123

---
Please keep this reference number for your records: ${referenceNumber}
    `;

    // Queue emails for background processing (non-blocking)
    const emailPayloads: EmailPayload[] = [
      {
        to: process.env.EMAIL_TO!,
        cc: process.env.EMAIL_MANAGEMENT || process.env.EMAIL_TO,
        subject: `[ACCOUNT] ${referenceNumber} - ${accountData.requestType.replace('-', ' ')}`,
        text: emailContent,
        replyTo: accountData.email
      },
      {
        to: accountData.email,
        subject: `Account Request Received - Reference #${referenceNumber}`,
        text: confirmationEmail
      }
    ];

    const jobIds = queueEmails(emailPayloads);
    timer.log('Email queuing');
    console.log(`Queued ${emailPayloads.length} emails with job IDs:`, jobIds);

    // Return immediate response (fast!)
    const totalTime = timer.elapsed();
    console.log(`Account API total response time: ${totalTime}ms`);

    return NextResponse.json(createApiResponse(true, 'Account management request submitted successfully', {
      referenceNumber: referenceNumber
    }));

  } catch (error) {
    console.error('Account management request error:', error);
    const { response, statusCode } = createErrorResponse('Failed to submit account management request');
    return NextResponse.json(response, { status: statusCode });
  }
}