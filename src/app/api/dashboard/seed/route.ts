import { NextResponse } from 'next/server';
import { getServerSession } from '@/lib/session';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define schemas
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

const Shipment = mongoose.models.Shipment || mongoose.model('Shipment', shipmentSchema);
const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);

export async function POST() {
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

    // Clear existing data for this user
    await Shipment.deleteMany({ userId });
    await Notification.deleteMany({ userId });

    // Sample shipments data
    const sampleShipments = [
      {
        userId,
        shipmentId: 'SL20241215001',
        serviceType: 'FBA Prep Services',
        status: 'in_transit',
        pickup: {
          address: '123 Warehouse St',
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '90210'
        },
        delivery: {
          address: '456 Distribution Ave',
          city: 'Phoenix',
          state: 'AZ',
          zipCode: '85001'
        },
        totalCost: 245.50,
        estimatedDelivery: new Date('2024-12-18'),
        createdAt: new Date('2024-12-15')
      },
      {
        userId,
        shipmentId: 'SL20241214002',
        serviceType: 'FBM Fulfillment',
        status: 'processing',
        pickup: {
          address: '789 Industrial Blvd',
          city: 'Dallas',
          state: 'TX',
          zipCode: '75201'
        },
        delivery: {
          address: '321 Commerce Dr',
          city: 'Houston',
          state: 'TX',
          zipCode: '77001'
        },
        totalCost: 89.25,
        estimatedDelivery: new Date('2024-12-17'),
        createdAt: new Date('2024-12-14')
      },
      {
        userId,
        shipmentId: 'SL20241213003',
        serviceType: 'Freight Shipping',
        status: 'delivered',
        pickup: {
          address: '555 Port Rd',
          city: 'Miami',
          state: 'FL',
          zipCode: '33101'
        },
        delivery: {
          address: '777 Business Park',
          city: 'Orlando',
          state: 'FL',
          zipCode: '32801'
        },
        totalCost: 567.80,
        estimatedDelivery: new Date('2024-12-15'),
        createdAt: new Date('2024-12-13')
      },
      {
        userId,
        shipmentId: 'SL20241212004',
        serviceType: 'Pallet Storage',
        status: 'processing',
        pickup: {
          address: '999 Storage Way',
          city: 'Atlanta',
          state: 'GA',
          zipCode: '30301'
        },
        delivery: {
          address: 'Warehouse Storage',
          city: 'Atlanta',
          state: 'GA',
          zipCode: '30301'
        },
        totalCost: 100.00,
        estimatedDelivery: new Date('2024-12-20'),
        createdAt: new Date('2024-12-12')
      },
      {
        userId,
        shipmentId: 'SL20241211005',
        serviceType: 'FBA Prep Services',
        status: 'quote_requested',
        pickup: {
          address: '111 Tech Blvd',
          city: 'Seattle',
          state: 'WA',
          zipCode: '98101'
        },
        delivery: {
          address: '222 Innovation Dr',
          city: 'Portland',
          state: 'OR',
          zipCode: '97201'
        },
        totalCost: 0,
        estimatedDelivery: new Date('2024-12-19'),
        createdAt: new Date('2024-12-11')
      }
    ];

    // Sample notifications
    const sampleNotifications = [
      {
        userId,
        title: 'Shipment Update',
        message: 'Your shipment SL20241215001 has been picked up and is now in transit.',
        type: 'shipment_update',
        read: false,
        shipmentId: 'SL20241215001',
        createdAt: new Date()
      },
      {
        userId,
        title: 'Quote Ready',
        message: 'Your quote for shipment SL20241211005 is ready for review.',
        type: 'quote_ready',
        read: false,
        shipmentId: 'SL20241211005',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        userId,
        title: 'Delivery Complete',
        message: 'Your shipment SL20241213003 has been successfully delivered.',
        type: 'delivery_complete',
        read: true,
        shipmentId: 'SL20241213003',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
      },
      {
        userId,
        title: 'Welcome to Simba Dispatch LLC',
        message: 'Thank you for choosing Simba Dispatch LLC for your shipping needs!',
        type: 'system',
        read: true,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
      }
    ];

    // Insert sample data
    await Shipment.insertMany(sampleShipments);
    await Notification.insertMany(sampleNotifications);

    return NextResponse.json({
      success: true,
      message: 'Sample data created successfully',
      data: {
        shipmentsCreated: sampleShipments.length,
        notificationsCreated: sampleNotifications.length
      }
    });

  } catch (error) {
    console.error('Seed data error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}