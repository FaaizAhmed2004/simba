import mongoose, { Document, Schema } from 'mongoose';
import { ILocationDetails } from './Shipment';

export interface ILoadRequirements {
  truckType: string;
  minCdlClass: 'A' | 'B' | 'C';
  specialEquipment?: string[];
  hazmat?: boolean;
  temperatureControlled?: boolean;
}

export interface ILoad extends Document {
  shipmentId: mongoose.Types.ObjectId;
  operatorId?: mongoose.Types.ObjectId;
  status: 'available' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  pickupLocation: ILocationDetails;
  deliveryLocation: ILocationDetails;
  requirements: ILoadRequirements;
  compensation: number;
  estimatedDuration: number; // in hours
  distance: number; // in miles
  pickupWindow: {
    start: Date;
    end: Date;
  };
  deliveryWindow: {
    start: Date;
    end: Date;
  };
  priority: 'low' | 'medium' | 'high' | 'urgent';
  notes?: string;
  assignedAt?: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const LocationDetailsSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, enum: ['USA'], default: 'USA' }
  },
  coordinates: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  contactName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  instructions: { type: String }
});

const LoadRequirementsSchema = new Schema<ILoadRequirements>({
  truckType: { type: String, required: true },
  minCdlClass: { type: String, enum: ['A', 'B', 'C'], required: true },
  specialEquipment: [{ type: String }],
  hazmat: { type: Boolean, default: false },
  temperatureControlled: { type: Boolean, default: false }
});

const LoadSchema = new Schema<ILoad>({
  shipmentId: {
    type: Schema.Types.ObjectId,
    ref: 'Shipment',
    required: true
  },
  operatorId: {
    type: Schema.Types.ObjectId,
    ref: 'TruckOperator'
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'in_progress', 'completed', 'cancelled'],
    default: 'available'
  },
  pickupLocation: {
    type: LocationDetailsSchema,
    required: true
  },
  deliveryLocation: {
    type: LocationDetailsSchema,
    required: true
  },
  requirements: {
    type: LoadRequirementsSchema,
    required: true
  },
  compensation: {
    type: Number,
    required: true,
    min: 0
  },
  estimatedDuration: {
    type: Number,
    required: true,
    min: 0
  },
  distance: {
    type: Number,
    required: true,
    min: 0
  },
  pickupWindow: {
    start: { type: Date, required: true },
    end: { type: Date, required: true }
  },
  deliveryWindow: {
    start: { type: Date, required: true },
    end: { type: Date, required: true }
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  notes: { type: String },
  assignedAt: { type: Date },
  completedAt: { type: Date }
}, {
  timestamps: true
});

// Indexes
LoadSchema.index({ status: 1 });
LoadSchema.index({ operatorId: 1 });
LoadSchema.index({ shipmentId: 1 });
LoadSchema.index({ priority: 1 });
LoadSchema.index({ 'pickupWindow.start': 1 });
LoadSchema.index({ compensation: -1 });

export default mongoose.models.Load || mongoose.model<ILoad>('Load', LoadSchema);