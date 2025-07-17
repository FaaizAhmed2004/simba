import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        await connectDB();

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() });

        // Always return success to prevent email enumeration attacks
        // But only send email if user exists
        if (user) {
            // Generate reset token
            const resetToken = crypto.randomBytes(32).toString('hex');
            const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

            // Save reset token to user
            user.passwordResetToken = resetToken;
            user.passwordResetExpires = resetTokenExpiry;
            await user.save();

            // Create reset URL
            const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;

            // Send email (if email configuration is available)
            try {
                if (process.env.EMAIL_SERVER_HOST && process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD) {
                    const transporter = nodemailer.createTransport({
                        host: process.env.EMAIL_SERVER_HOST,
                        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
                        secure: false,
                        auth: {
                            user: process.env.EMAIL_SERVER_USER,
                            pass: process.env.EMAIL_SERVER_PASSWORD
                        }
                    });

                    const mailOptions = {
                        from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
                        to: email,
                        subject: 'Password Reset Request - Simba Dispatch LLC',
                        html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb;">Password Reset Request</h2>
                <p>Hello,</p>
                <p>You have requested to reset your password for your Simba Dispatch LLC account.</p>
                <p>Click the button below to reset your password:</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${resetUrl}" 
                     style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    Reset Password
                  </a>
                </div>
                <p>Or copy and paste this link into your browser:</p>
                <p style="word-break: break-all; color: #2563eb;">${resetUrl}</p>
                <p><strong>This link will expire in 1 hour.</strong></p>
                <p>If you did not request this password reset, please ignore this email.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px;">
                  Best regards,<br>
                  Simba Dispatch LLC Team<br>
                  <a href="mailto:Simbadispatchservllc@gmail.com">Simbadispatchservllc@gmail.com</a>
                </p>
              </div>
            `
                    };

                    await transporter.sendMail(mailOptions);
                } else {
                    // Log the reset URL for development (when email is not configured)
                    console.log('Password reset URL (email not configured):', resetUrl);
                }
            } catch (emailError) {
                console.error('Failed to send reset email:', emailError);
                // Don't return error to user to prevent information disclosure
            }
        }

        // Always return success response
        return NextResponse.json(
            {
                success: true,
                message: 'If an account with that email exists, you will receive password reset instructions.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}