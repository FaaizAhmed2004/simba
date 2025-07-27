import { NextRequest, NextResponse } from 'next/server';
import { generateReferenceNumber, validateRequiredFields, queueEmails, createApiResponse, createErrorResponse, PerformanceTimer } from '@/lib/formUtils';
import { EmailPayload } from '@/lib/emailService';

interface FeedbackRequest {
  name: string;
  email: string;
  serviceUsed: string;
  rating: 1 | 2 | 3 | 4 | 5;
  feedbackType: 'compliment' | 'suggestion' | 'general';
  comments: string;
  recommendToOthers: boolean;
}

export async function POST(request: NextRequest) {
  const timer = new PerformanceTimer();
  
  try {
    const feedbackData: FeedbackRequest = await request.json();
    timer.log('JSON parsing');

    // Validate required fields
    const requiredFields = ['name', 'email', 'serviceUsed', 'rating', 'comments'];
    const missingFields = validateRequiredFields(feedbackData, requiredFields);
    
    if (missingFields.length > 0) {
      const { response, statusCode } = createErrorResponse(`Missing required fields: ${missingFields.join(', ')}`, 400);
      return NextResponse.json(response, { status: statusCode });
    }
    timer.log('Validation');

    const referenceNumber = generateReferenceNumber('FEED');
    const ratingStars = '★'.repeat(feedbackData.rating) + '☆'.repeat(5 - feedbackData.rating);

    // Prepare email content for management team
    const emailContent = `
CUSTOMER FEEDBACK SUBMISSION

Reference Number: ${referenceNumber}
Submitted: ${new Date().toLocaleString()}

CUSTOMER INFORMATION:
Name: ${feedbackData.name}
Email: ${feedbackData.email}

FEEDBACK DETAILS:
Service Used: ${feedbackData.serviceUsed}
Rating: ${feedbackData.rating}/5 stars ${ratingStars}
Feedback Type: ${feedbackData.feedbackType.toUpperCase()}
Would Recommend to Others: ${feedbackData.recommendToOthers ? 'YES' : 'NO'}

CUSTOMER COMMENTS:
${feedbackData.comments}

---
FEEDBACK ANALYSIS:
Rating Level: ${feedbackData.rating >= 4 ? 'POSITIVE' : feedbackData.rating >= 3 ? 'NEUTRAL' : 'NEGATIVE'}
${feedbackData.rating <= 2 ? 'ACTION REQUIRED: Low rating - follow up with customer' : ''}
${feedbackData.feedbackType === 'suggestion' ? 'SUGGESTION: Review for potential service improvements' : ''}

This feedback was submitted through the Simba Dispatch Services LLC website.
Please acknowledge receipt and take appropriate action based on feedback type and rating.
    `;

    // Prepare thank you email for customer
    const thankYouEmail = `
Dear ${feedbackData.name},

Thank you for taking the time to share your feedback about our ${feedbackData.serviceUsed} service!

FEEDBACK SUMMARY:
Reference Number: ${referenceNumber}
Your Rating: ${feedbackData.rating}/5 stars ${ratingStars}
Service: ${feedbackData.serviceUsed}
Submitted: ${new Date().toLocaleString()}

Your feedback is invaluable to us and helps us continuously improve our services. We truly appreciate you taking the time to share your experience.

${feedbackData.rating >= 4 ? 
  "We're thrilled to hear about your positive experience! Thank you for choosing Simba Dispatch Services." :
  feedbackData.rating >= 3 ?
  "Thank you for your feedback. We'll review your comments and work to enhance your future experience." :
  "We're sorry to hear that your experience didn't meet expectations. Our team will review your feedback and work to improve our services."
}

${feedbackData.feedbackType === 'suggestion' ? 
  "Your suggestions are particularly valuable as they help us identify areas for improvement and innovation." : ""
}

If you have any additional comments or need assistance, please don't hesitate to contact us.

Best regards,
Customer Experience Team
Simba Dispatch Services LLC
Email: support@simbadispatch.com
Phone: (407) 555-0123

---
Reference Number: ${referenceNumber}
    `;

    // Queue emails for background processing (non-blocking)
    const emailPayloads: EmailPayload[] = [
      {
        to: process.env.EMAIL_TO!,
        cc: process.env.EMAIL_MANAGEMENT || process.env.EMAIL_TO,
        subject: `[FEEDBACK-${feedbackData.rating}★] ${referenceNumber} - ${feedbackData.feedbackType}`,
        text: emailContent,
        replyTo: feedbackData.email
      },
      {
        to: feedbackData.email,
        subject: `Thank You for Your Feedback - Reference #${referenceNumber}`,
        text: thankYouEmail
      }
    ];

    queueEmails(emailPayloads);
    timer.log('Email queuing');

    // Return immediate response (fast!)
    const totalTime = timer.elapsed();
    console.log(`Feedback API total response time: ${totalTime}ms`);

    return NextResponse.json(createApiResponse(true, 'Feedback submitted successfully', {
      referenceNumber: referenceNumber
    }));

  } catch (error) {
    console.error('Feedback submission error:', error);
    const { response, statusCode } = createErrorResponse('Failed to submit feedback');
    return NextResponse.json(response, { status: statusCode });
  }
}