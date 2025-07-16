import mongoose from 'mongoose';

export interface IContact extends mongoose.Document {
  // Contact Info
  name: string;
  email: string;
  companyName: string;
  yearsInBusiness: string;
  phone: string;
  countryCode: string;
  extension?: string;
  
  // Channels & Products
  channels: string[];
  productTypes: string[];
  
  // Requirements
  requirements?: string;
  additionalNeeds: string[];
  
  // Metadata
  submittedAt: Date;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  source: string;
  ipAddress?: string;
  notes?: string;
  assignedTo?: string;
  followUpDate?: Date;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new mongoose.Schema<IContact>({
  // Contact Info
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  yearsInBusiness: {
    type: String,
    required: true,
    enum: ['0-1', '1-3', '3-5', '5+']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  countryCode: {
    type: String,
    default: 'US',
    trim: true
  },
  extension: {
    type: String,
    trim: true
  },
  
  // Channels & Products
  channels: [{
    type: String,
    enum: ['Shopify', 'Amazon', 'eBay', 'My Own Website', 'Other']
  }],
  productTypes: [{
    type: String,
    enum: ['Apparel', 'Electronics', 'Home Goods', 'Beauty & Cosmetics', 'Food & Beverage', 'Other']
  }],
  
  // Requirements
  requirements: {
    type: String,
    trim: true,
    maxlength: 2000
  },
  additionalNeeds: [{
    type: String,
    enum: ['Custom Packaging', 'International Shipping', 'Returns Management']
  }],
  
  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
    default: 'new'
  },
  source: {
    type: String,
    required: true,
    default: 'multistep-form'
  },
  ipAddress: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  assignedTo: {
    type: String,
    trim: true
  },
  followUpDate: {
    type: Date
  }
}, {
  timestamps: true,
  collection: 'contacts'
});

// Indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ companyName: 1 });
ContactSchema.index({ status: 1 });
ContactSchema.index({ submittedAt: -1 });
ContactSchema.index({ assignedTo: 1 });

// Virtual for full phone number
ContactSchema.virtual('fullPhone').get(function() {
  return `${this.countryCode} ${this.phone}${this.extension ? ` ext. ${this.extension}` : ''}`;
});

// Method to mark as contacted
ContactSchema.methods.markAsContacted = function(assignedTo?: string, notes?: string) {
  this.status = 'contacted';
  if (assignedTo) this.assignedTo = assignedTo;
  if (notes) this.notes = notes;
  return this.save();
};

// Method to set follow-up date
ContactSchema.methods.setFollowUp = function(date: Date, notes?: string) {
  this.followUpDate = date;
  if (notes) this.notes = notes;
  return this.save();
};

// Static method to find contacts by status
ContactSchema.statics.findByStatus = function(status: string) {
  return this.find({ status }).sort({ submittedAt: -1 });
};

// Static method to find recent contacts
ContactSchema.statics.findRecent = function(days: number = 7) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  return this.find({ submittedAt: { $gte: cutoffDate } }).sort({ submittedAt: -1 });
};

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);