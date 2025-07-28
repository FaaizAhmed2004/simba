import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/emailService';

export async function GET(request: NextRequest) {
  try {
    // Check if email environment variables are set
    const emailConfig = {
      EMAIL_HOST: process.env.EMAIL_HOST,
      EMAIL_PORT: process.env.EMAIL_PORT,
      EMAIL_SECURE: process.env.EMAIL_SECURE,
      EMAIL_USER: process.env.EMAIL_USER ? '***configured***' : 'NOT SET',
      EMAIL_PASS: process.env.EMAIL_PASS ? '***configured***' : 'NOT SET',
      EMAIL_TO: process.env.EMAIL_TO ? '***configured***' : 'NOT SET'
    };

    console.log('Email configuration check:', emailConfig);

    // Test email connection
    const connectionTest = await emailService.testConnection();
    
    if (!connectionTest) {
      return NextResponse.json({
        success: false,
        message: 'Email connection test failed',
        config: emailConfig
      }, { status: 500 });
    }

    // Send test email if requested
    const url = new URL(request.url);
    const sendTest = url.searchParams.get('send') === 'true';
    
    if (sendTest && process.env.EMAIL_TO) {
      try {
        await emailService.sendEmail({
          to: process.env.EMAIL_TO,
          subject: 'Test Email - Simba Dispatch Services LLC',
          text: `
This is a test email from Simba Dispatch Services LLC website.

Sent at: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV}

If you receive this email, the email service is working correctly.
          `
        });

        return NextResponse.json({
          success: true,
          message: 'Email connection test passed and test email sent successfully',
          config: emailConfig
        });
      } catch (error) {
        console.error('Test email send failed:', error);
        return NextResponse.json({
          success: false,
          message: 'Email connection test passed but sending test email failed',
          error: error instanceof Error ? error.message : 'Unknown error',
          config: emailConfig
        }, { status: 500 });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Email connection test passed',
      config: emailConfig,
      note: 'Add ?send=true to URL to send a test email'
    });

  } catch (error) {
    console.error('Email test error:', error);
    return NextResponse.json({
      success: false,
      message: 'Email test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}