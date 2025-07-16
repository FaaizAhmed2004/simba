import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: 'USA';
}

export interface INotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  shipmentUpdates: boolean;
  promotions: boolean;
}

export interface IUser extends Document {
  email: string;
  password: string;
  role: 'customer' | 'admin' | 'operator';
  profile: {
    firstName: string;
    lastName: string;
    phone: string;
    company?: string;
    address: IAddress;
  };
  preferences: {
    notifications: INotificationPreferences;
    language: string;
    timezone: string;
  };
  status: 'active' | 'inactive' | 'suspended';
  emailVerified: boolean;
  emailVerificationToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AddressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, enum: ['USA'], default: 'USA' }
});

const NotificationPreferencesSchema = new Schema<INotificationPreferences>({
  email: { type: Boolean, default: true },
  sms: { type: Boolean, default: false },
  push: { type: Boolean, default: true },
  shipmentUpdates: { type: Boolean, default: true },
  promotions: { type: Boolean, default: false }
});

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'operator'],
    default: 'customer'
  },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    address: { type: AddressSchema, required: true }
  },
  preferences: {
    notifications: { type: NotificationPreferencesSchema, default: {} },
    language: { type: String, default: 'en' },
    timezone: { type: String, default: 'America/New_York' }
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  emailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date }
}, {
  timestamps: true
});

// Index for performance
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ status: 1 });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);