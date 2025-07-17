import { NextResponse } from 'next/server';
import { getServerSession } from '@/lib/session';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define Shipment schema for aggregation
const shipmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceType: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['quote_requested', 'processing', 'in_transit', 'delivered', 'cancelled'],
    default: 'quote_requested'
  },
  pickup: {
    address: String,
    city: String,
    state: String,
    zipCode: String
  },
  delivery: {
    address: String,
    city: String,
    state: String,
    zipCode: String
  },
  totalCost: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create or get existing model
const Shipment = mongoose.models.Shipment || mongoose.model('Shipment', shipmentSchema);

export async function GET() {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const userId = new mongoose.Types.ObjectId(session.user.id);

    // Get shipment statistics
    const stats = await Shipment.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalValue: { $sum: '$totalCost' }
        }
      }
    ]);

    // Initialize default stats
    const defaultStats = {
      active: 0,
      pending: 0,
      in_transit: 0,
      delivered: 0,
      total_value: 0
    };

    // Process aggregated stats
    stats.forEach(stat => {
      switch (stat._id) {
        case 'processing':
          defaultStats.active += stat.count;
          break;
        case 'quote_requested':
          defaultStats.pending += stat.count;
          break;
        case 'in_transit':
          defaultStats.in_transit += stat.count;
          break;
        case 'delivered':
          defaultStats.delivered += stat.count;
          break;
      }
      defaultStats.total_value += stat.totalValue || 0;
    });

    // Get recent activity count
    const recentCount = await Shipment.countDocuments({
      userId,
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } // Last 7 days
    });

    return NextResponse.json({
      success: true,
      data: {
        stats: defaultStats,
        recentActivity: recentCount
      }
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}