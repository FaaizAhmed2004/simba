import mongoose, { Document, Schema } from 'mongoose';

export interface IDimensions {
  length: number;
  width: number;
  height: number;
  unit: 'inches' | 'cm';
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface ILocationDetails {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: 'USA';
  };
  coordinates?: ICoordinates;
  contactName: string;
  contactPhone: string;
  instructions?: string;
}

export interface IFBADetails {
  unitCount: number;
  unitPrice: number;
  boxCount: number;
  boxCharges: number;
  hasCustomBarcode: boolean;
  fnsku: string;
  repackagingNotes?: string;
}

export interface IPackage {
  weight: number;
  dimensions: IDimensions;
  price: number;
}

export interface IFBMDetails {
  packages: IPackage[];
  totalWeight: number;
  shippingMethod: string;
}

export interface IFreightDetails {
  weight: number;
  dimensions: IDimensions;
  freightClass: string;
  commodityDescription: string;
  specialRequirements?: string[];
}

export interface IStorageDetails {
  palletCount: number;
  weeklyRate: number;
  startDate: Date;
  endDate?: Date;
  storageLocation: string;
  accessInstructions?: string;
}

export interface IPricingDetails {
  basePrice: number;
  additionalCharges: {
    name: string;
    amount: number;
  }[];
  totalPrice: number;
  currency: 'USD';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
}

export interface ITimelineEvent {
  status: string;
  timestamp: Date;
  location?: string;
  description: string;
  updatedBy: mongoose.Types.ObjectId;
}

export type ShipmentStatus = 
  | 'QUOTE_REQUESTED'
  | 'BOOKED'
  | 'PICKUP_SCHEDULED'
  | 'IN_TRANSIT'
  | 'PROCESSING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'EXCEPTION';

export interface IShipment extends Document {
  trackingNumber: string;
  customerId: mongoose.Types.ObjectId;
  serviceType: 'FBA' | 'FBM' | 'FREIGHT' | 'STORAGE';
  status: ShipmentStatus;
  
  // Service-specific details
  fbaDetails?: IFBADetails;
  fbmDetails?: IFBMDetails;
  freightDetails?: IFreightDetails;
  storageDetails?: IStorageDetails;
  
  // Common details
  pickup: ILocationDetails;
  delivery: ILocationDetails;
  pricing: IPricingDetails;
  timeline: ITimelineEvent[];
  
  // Scheduling
  pickupDate?: Date;
  deliveryDate?: Date;
  estimatedDelivery?: Date;
  
  // Assignment
  assignedOperator?: mongoose.Types.ObjectId;
  
  // Additional info
  specialInstructions?: string;
  insuranceValue?: number;
  
  createdAt: Date;
  updatedAt: Date;
}

const DimensionsSchema = new Schema<IDimensions>({
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  unit: { type: String, enum: ['inches', 'cm'], default: 'inches' }
});

const LocationDetailsSchema = new Schema<ILocationDetails>({
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

const FBADetailsSchema = new Schema<IFBADetails>({
  unitCount: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  boxCount: { type: Number, required: true },
  boxCharges: { type: Number, required: true },
  hasCustomBarcode: { type: Boolean, default: false },
  fnsku: { type: String, required: true },
  repackagingNotes: { type: String }
});

const PackageSchema = new Schema<IPackage>({
  weight: { type: Number, required: true },
  dimensions: { type: DimensionsSchema, required: true },
  price: { type: Number, required: true }
});

const FBMDetailsSchema = new Schema<IFBMDetails>({
  packages: [PackageSchema],
  totalWeight: { type: Number, required: true },
  shippingMethod: { type: String, required: true }
});

const FreightDetailsSchema = new Schema<IFreightDetails>({
  weight: { type: Number, required: true },
  dimensions: { type: DimensionsSchema, required: true },
  freightClass: { type: String, required: true },
  commodityDescription: { type: String, required: true },
  specialRequirements: [{ type: String }]
});

const StorageDetailsSchema = new Schema<IStorageDetails>({
  palletCount: { type: Number, required: true },
  weeklyRate: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  storageLocation: { type: String, required: true },
  accessInstructions: { type: String }
});

const PricingDetailsSchema = new Schema<IPricingDetails>({
  basePrice: { type: Number, required: true },
  additionalCharges: [{
    name: { type: String, required: true },
    amount: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  currency: { type: String, enum: ['USD'], default: 'USD' },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'paid', 'failed', 'refunded'], 
    default: 'pending' 
  }
});

const TimelineEventSchema = new Schema<ITimelineEvent>({
  status: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  location: { type: String },
  description: { type: String, required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const ShipmentSchema = new Schema<IShipment>({
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceType: {
    type: String,
    enum: ['FBA', 'FBM', 'FREIGHT', 'STORAGE'],
    required: true
  },
  status: {
    type: String,
    enum: ['QUOTE_REQUESTED', 'BOOKED', 'PICKUP_SCHEDULED', 'IN_TRANSIT', 'PROCESSING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'EXCEPTION'],
    default: 'QUOTE_REQUESTED'
  },
  
  // Service-specific details
  fbaDetails: { type: FBADetailsSchema },
  fbmDetails: { type: FBMDetailsSchema },
  freightDetails: { type: FreightDetailsSchema },
  storageDetails: { type: StorageDetailsSchema },
  
  // Common details
  pickup: { type: LocationDetailsSchema, required: true },
  delivery: { type: LocationDetailsSchema, required: true },
  pricing: { type: PricingDetailsSchema, required: true },
  timeline: [TimelineEventSchema],
  
  // Scheduling
  pickupDate: { type: Date },
  deliveryDate: { type: Date },
  estimatedDelivery: { type: Date },
  
  // Assignment
  assignedOperator: { type: Schema.Types.ObjectId, ref: 'TruckOperator' },
  
  // Additional info
  specialInstructions: { type: String },
  insuranceValue: { type: Number }
}, {
  timestamps: true
});

// Indexes for performance
ShipmentSchema.index({ trackingNumber: 1 });
ShipmentSchema.index({ customerId: 1 });
ShipmentSchema.index({ status: 1 });
ShipmentSchema.index({ serviceType: 1 });
ShipmentSchema.index({ assignedOperator: 1 });
ShipmentSchema.index({ createdAt: -1 });

// Generate tracking number before saving
ShipmentSchema.pre('save', function(next) {
  if (!this.trackingNumber) {
    const prefix = 'SL';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    this.trackingNumber = `${prefix}${timestamp}${random}`;
  }
  next();
});

export default mongoose.models.Shipment || mongoose.model<IShipment>('Shipment', ShipmentSchema);