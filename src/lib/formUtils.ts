import { jobQueue } from './jobQueue';
import { EmailPayload } from './emailService';

// Generate reference number for form submissions
export function generateReferenceNumber(prefix: string): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `${prefix}-${timestamp}-${random}`.toUpperCase();
}

// Validate required fields
export function validateRequiredFields(data: Record<string, any>, requiredFields: string[]): string[] {
  const missingFields: string[] = [];
  
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      missingFields.push(field);
    }
  }
  
  return missingFields;
}

// Queue email for background processing
export function queueEmail(emailPayload: EmailPayload): string {
  return jobQueue.addJob('email', emailPayload);
}

// Queue multiple emails for background processing
export function queueEmails(emailPayloads: EmailPayload[]): string[] {
  return emailPayloads.map(payload => queueEmail(payload));
}

// Create standard API response
export function createApiResponse(success: boolean, message: string, data?: any) {
  return {
    success,
    message,
    timestamp: new Date().toISOString(),
    ...data
  };
}

// Create error response
export function createErrorResponse(message: string, statusCode = 500) {
  return {
    response: createApiResponse(false, message),
    statusCode
  };
}

// Performance timing utility
export class PerformanceTimer {
  private startTime: number;
  
  constructor() {
    this.startTime = Date.now();
  }
  
  elapsed(): number {
    return Date.now() - this.startTime;
  }
  
  log(operation: string) {
    const elapsed = this.elapsed();
    console.log(`${operation} took ${elapsed}ms`);
    return elapsed;
  }
}