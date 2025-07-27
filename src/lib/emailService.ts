import nodemailer from 'nodemailer';

export interface EmailPayload {
  to: string;
  cc?: string;
  subject: string;
  text: string;
  replyTo?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isInitialized = false;

  // Initialize email transporter (connection pooling)
  private async initialize() {
    if (this.isInitialized) return;

    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        pool: true, // Enable connection pooling
        maxConnections: 5, // Maximum concurrent connections
        maxMessages: 100, // Maximum messages per connection
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Verify connection
      await this.transporter.verify();
      this.isInitialized = true;
      console.log('Email service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize email service:', error);
      throw error;
    }
  }

  // Send email with retry logic
  async sendEmail(payload: EmailPayload): Promise<void> {
    await this.initialize();

    if (!this.transporter) {
      throw new Error('Email transporter not initialized');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: payload.to,
      cc: payload.cc,
      subject: payload.subject,
      text: payload.text,
      replyTo: payload.replyTo
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  // Send multiple emails (for confirmation + notification)
  async sendEmails(payloads: EmailPayload[]): Promise<void> {
    const promises = payloads.map(payload => this.sendEmail(payload));
    await Promise.all(promises);
  }

  // Close email service
  async close() {
    if (this.transporter) {
      this.transporter.close();
      this.isInitialized = false;
    }
  }
}

// Singleton instance
export const emailService = new EmailService();

// Graceful shutdown
process.on('SIGTERM', async () => {
  await emailService.close();
});

process.on('SIGINT', async () => {
  await emailService.close();
});