import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/session';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define Notification schema
const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['shipment_update', 'quote_ready', 'delivery_complete', 'system', 'promotion'],
    default: 'system'
  },
  read: { type: Boolean, default: false },
  shipmentId: String,
  createdAt: { type: Date, default: Date.now }
});

// Create or get existing model
const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '5');
    const unreadOnly = searchParams.get('unread') === 'true';

    await connectDB();

    const userId = new mongoose.Types.ObjectId(session.user.id);

    // Build query
    const query: { userId: mongoose.Types.ObjectId; read?: boolean } = { userId };
    if (unreadOnly) {
      query.read = false;
    }

    // Get notifications
    const notifications = await Notification.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    // Get unread count
    const unreadCount = await Notification.countDocuments({ 
      userId, 
      read: false 
    });

    return NextResponse.json({
      success: true,
      data: {
        notifications,
        unreadCount
      }
    });

  } catch (error) {
    console.error('Dashboard notifications error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { action, notificationId } = await request.json();

    await connectDB();

    const userId = new mongoose.Types.ObjectId(session.user.id);

    if (action === 'mark_read' && notificationId) {
      await Notification.findOneAndUpdate(
        { _id: notificationId, userId },
        { read: true }
      );
    } else if (action === 'mark_all_read') {
      await Notification.updateMany(
        { userId, read: false },
        { read: true }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Notification updated successfully'
    });

  } catch (error) {
    console.error('Update notification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}