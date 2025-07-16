import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Admin credentials - In production, these should be stored securely
const ADMIN_CREDENTIALS = [
  {
    email: 'admin@simbalogistics.com',
    password: 'admin123', // In production, this should be hashed
    name: 'Admin User',
    role: 'admin'
  },
  {
    email: 'manager@simbalogistics.com',
    password: 'manager123',
    name: 'Manager User',
    role: 'manager'
  }
];

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find admin user
    const admin = ADMIN_CREDENTIALS.find(
      cred => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password
    );

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        email: admin.email,
        name: admin.name,
        role: admin.role,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
      },
      JWT_SECRET
    );

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}