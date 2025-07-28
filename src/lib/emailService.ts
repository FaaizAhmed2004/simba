const nodemailer = require('nodemailer');

export interface EmailPayload {
  to: string;
  cc?: string;
  subject: string;
  text: string;
  replyTo?: string;
}

class EmailService {
  private transporter: unknown = null;

  // Create transporter for each email send (more reliable for serverless)
  private createTransporter() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ionos.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // For IONOS compatibility
      }
    });
  }

  // Send single email
  async sendEmail(payload: EmailPayload): Promise<void> {
    try {
      // Validate environment variables
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email credentials not configured. Check EMAIL_USER and EMAIL_PASS environment variables.');
      }

      if (!process.env.EMAIL_HOST) {
        throw new Error('Email host not configured. Check EMAIL_HOST environment variable.');
      }

      const transporter = this.createTransporter();

      const mailOptions = {
        from: `"Simba Dispatch Services LLC" <${process.env.EMAIL_USER}>`,
        to: payload.to,
        cc: payload.cc,
        subject: payload.subject,
        text: payload.text,
        replyTo: payload.replyTo || process.env.EMAIL_USER
      };

      console.log(`Attempting to send email to: ${payload.to}`);
      console.log(`Email subject: ${payload.subject}`);
      console.log(`Using SMTP host: ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}`);
      
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', info.messageId);
      console.log('Email response:', info.response);
      
      // Close transporter
      transporter.close();
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      console.error('Email payload:', {
        to: payload.to,
        subject: payload.subject,
        hasText: !!payload.text
      });
      throw error;
    }
  }

  // Send multiple emails
  async sendEmails(payloads: EmailPayload[]): Promise<void> {
    const results = [];
    
    for (const payload of payloads) {
      try {
        await this.sendEmail(payload);
        results.push({ success: true, to: payload.to });
      } catch (error) {
        console.error(`Failed to send email to ${payload.to}:`, error);
        results.push({ success: false, to: payload.to, error });
      }
    }

    const failures = results.filter(r => !r.success);
    
    if (failures.length === payloads.length) {
      throw new Error(`All ${payloads.length} emails failed to send`);
    }

    console.log(`Successfully sent ${results.length - failures.length}/${payloads.length} emails`);
  }

  // Test connection
  async testConnection(): Promise<boolean> {
    try {
      const transporter = this.createTransporter();
      await transporter.verify();
      transporter.close();
      console.log('Email connection test passed');
      return true;
    } catch (error) {
      console.error('Email connection test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();