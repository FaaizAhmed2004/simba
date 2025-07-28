import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/emailService';
import { jobQueue } from '@/lib/jobQueue';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'status';

    // Check environment variables
    const envCheck = {
      EMAIL_HOST: process.env.EMAIL_HOST || 'NOT SET',
      EMAIL_PORT: process.env.EMAIL_PORT || 'NOT SET',
      EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
      EMAIL_TO: process.env.EMAIL_TO || 'NOT SET',
      EMAIL_MANAGEMENT: process.env.EMAIL_MANAGEMENT || 'NOT SET'
    };

    // Get job queue status
    const queueStatus = {
      totalJobs: jobQueue.getAllJobs().length,
      pendingJobs: jobQueue.getPendingJobsCount(),
      recentJobs: jobQueue.getAllJobs().slice(-5).map(job => ({
        id: job.id,
        type: job.type,
        status: job.status,
        createdAt: job.createdAt,
        error: job.error
      }))
    };

    if (action === 'test-connection') {
      const connectionTest = await emailService.testConnection();
      return NextResponse.json({
        success: connectionTest,
        message: connectionTest ? 'Email connection successful' : 'Email connection failed',
        environment: envCheck,
        queue: queueStatus
      });
    }

    if (action === 'send-test' && process.env.EMAIL_TO) {
      try {
        await emailService.sendEmail({
          to: process.env.EMAIL_TO,
          subject: 'Debug Test Email - Simba Dispatch Services',
          text: `
DEBUG TEST EMAIL

This email was sent directly (not through queue) to test email functionality.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV}
Host: ${process.env.EMAIL_HOST}
Port: ${process.env.EMAIL_PORT}

If you receive this, direct email sending is working.
          `
        });

        return NextResponse.json({
          success: true,
          message: 'Test email sent successfully (direct send)',
          environment: envCheck,
          queue: queueStatus
        });
      } catch (error) {
        return NextResponse.json({
          success: false,
          message: 'Test email failed',
          error: error instanceof Error ? error.message : 'Unknown error',
          environment: envCheck,
          queue: queueStatus
        }, { status: 500 });
      }
    }

    if (action === 'test-queue' && process.env.EMAIL_TO) {
      const { queueEmail } = await import('@/lib/formUtils');
      
      const jobId = queueEmail({
        to: process.env.EMAIL_TO,
        subject: 'Queue Test Email - Simba Dispatch Services',
        text: `
QUEUE TEST EMAIL

This email was sent through the job queue system.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV}

If you receive this, the queue system is working.
        `
      });

      return NextResponse.json({
        success: true,
        message: 'Test email queued successfully',
        jobId,
        environment: envCheck,
        queue: queueStatus
      });
    }

    // Default status check
    return NextResponse.json({
      success: true,
      message: 'Email debug information',
      environment: envCheck,
      queue: queueStatus,
      availableActions: [
        'test-connection',
        'send-test',
        'test-queue'
      ],
      usage: 'Add ?action=test-connection or ?action=send-test or ?action=test-queue'
    });

  } catch (error) {
    console.error('Email debug error:', error);
    return NextResponse.json({
      success: false,
      message: 'Email debug failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}