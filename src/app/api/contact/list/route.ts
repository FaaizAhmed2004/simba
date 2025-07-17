import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    try {
      jwt.verify(token, JWT_SECRET);
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Connect to database
    await connectToDatabase();

    // Build query
    const query = status && status !== 'all' ? { status } : {};

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Contact.countDocuments(query);

    // Get status counts for dashboard
    const statusCounts = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const statusSummary = statusCounts.reduce((acc, item) => {
      acc[item._id] = item.count;
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statusSummary
      }
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch contacts'
      },
      { status: 500 }
    );
  }
}