import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/session';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define Shipment schema
const shipmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shipmentId: { type: String, required: true, unique: true },
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
  estimatedDelivery: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create or get existing model
const Shipment = mongoose.models.Shipment || mongoose.model('Shipment', shipmentSchema);

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
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * limit;

    await connectDB();

    const userId = new mongoose.Types.ObjectId(session.user.id);

    // Get recent shipments
    const shipments = await Shipment.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    // Get total count
    const totalCount = await Shipment.countDocuments({ userId });

    // Format shipments for frontend
    const formattedShipments = shipments.map(shipment => ({
      id: shipment.shipmentId,
      service: shipment.serviceType,
      status: formatStatus(shipment.status),
      pickup: `${shipment.pickup?.city || 'N/A'}, ${shipment.pickup?.state || 'N/A'}`,
      delivery: `${shipment.delivery?.city || 'N/A'}, ${shipment.delivery?.state || 'N/A'}`,
      date: shipment.createdAt.toISOString().split('T')[0],
      statusColor: getStatusColor(shipment.status),
      totalCost: shipment.totalCost,
      estimatedDelivery: shipment.estimatedDelivery
    }));

    return NextResponse.json({
      success: true,
      data: {
        shipments: formattedShipments,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit)
        }
      }
    });

  } catch (error) {
    console.error('Dashboard shipments error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function formatStatus(status: string): string {
  switch (status) {
    case 'quote_requested':
      return 'Quote Requested';
    case 'processing':
      return 'Processing';
    case 'in_transit':
      return 'In Transit';
    case 'delivered':
      return 'Delivered';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status;
  }
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'quote_requested':
      return 'text-gray-600 bg-gray-100';
    case 'processing':
      return 'text-blue-600 bg-blue-100';
    case 'in_transit':
      return 'text-orange-600 bg-orange-100';
    case 'delivered':
      return 'text-green-600 bg-green-100';
    case 'cancelled':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}