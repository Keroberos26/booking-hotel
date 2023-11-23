import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connect to MongoDB successfully');
  } catch (error) {
    console.log('Connect to MongoDB failure');
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB is disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
});
