import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    if (mongoose.connection.readyState === 0) {
      // The readyState 0 means there is no connection, so connect
      await mongoose.connect(process.env.DB_URI, { dbName: 'brain-bomb' });
      const connection = mongoose.connection;

      connection.on('connected', () => {
        console.log('🟢 MongoDB connected successfully');
      });

      connection.on('error', (err) => {
        console.log('🔴 MongoDB connection error', err);
      });
    } else {
      // console.log('🟢 MongoDB is already connected');
    }
  } catch (error) {
    console.error('🔴 Database connection error', error);
  }
}
