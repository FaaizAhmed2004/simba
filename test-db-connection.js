// Test MongoDB connection
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Testing MongoDB connection...');
console.log('URI:', MONGODB_URI?.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')); // Hide credentials

mongoose.connect(MONGODB_URI, {
  bufferCommands: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
})
.then(() => {
  console.log('✅ MongoDB connection successful!');
  process.exit(0);
})
.catch((error) => {
  console.error('❌ MongoDB connection failed:', error.message);
  process.exit(1);
});