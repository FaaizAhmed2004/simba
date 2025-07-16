import mongoose, { Document, Schema } from 'mongoose';

export interface ITruckSpecifications {
  truckType: string;
  maxWeight: number;
  maxDimensions: {
    length: number;
    width: number;
    height: number;
  };
  specialEquipment: string[];
  cdlClass: 'A' | 'B' | 'C';
}

export interface IAvailabilitySchedule {
  monday: { available: boolean; startTime?: string; endTime?: string; };
  tuesday: { available: boolean; startTime?: string; endTime?: string; };
  wednesday: { available: boolean; startTime?: string; endTime?: string; };
  thursday: { available: boolean; startTime?: string; endTime?: string; };
  friday: { available: boolean; startTime?: string; endTime?: string; };
  saturday: { available: boolean; startTime?: string; endTime?: string; };
  sunday: { available: boolean; startTime?: string; endTime?: string; };
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface ITruckOperator extends Document {
  userId: mongoose.Types.ObjectId;
  licenseNumber: string;
  truckSpecs: ITruckSpecifications;
  availability: IAvailabilitySchedule;
  currentLocation?: ICoordinates;
  rating: number;
  completedLoads: number;
  status: 'available' | 'assigned' | 'offline';
  insuranceInfo: {
    provider: string;
    policyNumber: string;
    expirationDate: Date;
  };
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const TruckSpecificationsSchema = new Schema<ITruckSpecifications>({
  truckType: { type: String, required: true },
  maxWeight: { type: Number, required: true },
  maxDimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  },
  specialEquipment: [{ type: String }],
  cdlClass: { type: String, enum: ['A', 'B', 'C'], required: true }
});

const AvailabilityScheduleSchema = new Schema<IAvailabilitySchedule>({
  monday: {
    available: { type: Boolean, default: true },
    startTime: { type: String },
    endTime: { type: String }
  },
  tuesday: {
    available: { type: Boolean, default: true },
    startTime: { type: String },
    endTime: { type: String }
  },
  wednesday: {
    available: { type: Boolean, default: true },
    startTime: { type: String },
    endTime: { type: String }
  },
  thursday: {
    available: { type: Boolean, default: true },
    startTime: { type: String },
    endTime: { type: String }
  },
  friday: {
    available: { type: Boolean, default: true },
    startTime: { type: String },
    endTime: { type: String }
  },
  saturday: {
    available: { type: Boolean, default: false },
    startTime: { type: String },
    endTime: { type: String }
  },
  sunday: {
    available: { type: Boolean, default: false },
    startTime: { type: String },
    endTime: { type: String }
  }
});

const TruckOperatorSchema = new Schema<ITruckOperator>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true
  },
  truckSpecs: {
    type: TruckSpecificationsSchema,
    required: true
  },
  availability: {
    type: AvailabilityScheduleSchema,
    default: {}
  },
  currentLocation: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  rating: {
    type: Number,
    default: 5.0,
    min: 0,
    max: 5
  },
  completedLoads: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'offline'],
    default: 'available'
  },
  insuranceInfo: {
    provider: { type: String, required: true },
    policyNumber: { type: String, required: true },
    expirationDate: { type: Date, required: true }
  },
  emergencyContact: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    relationship: { type: String, required: true }
  }
}, {
  timestamps: true
});

// Indexes
TruckOperatorSchema.index({ userId: 1 });
TruckOperatorSchema.index({ status: 1 });
TruckOperatorSchema.index({ rating: -1 });
TruckOperatorSchema.index({ licenseNumber: 1 });

export default mongoose.models.TruckOperator || mongoose.model<ITruckOperator>('TruckOperator', TruckOperatorSchema);