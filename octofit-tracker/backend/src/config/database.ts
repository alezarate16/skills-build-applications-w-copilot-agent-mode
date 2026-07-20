import mongoose from 'mongoose';

export const connectDatabase = async () => {
  const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
};

export const disconnectDatabase = async () => {
  await mongoose.disconnect();
};

export default mongoose.connection;
