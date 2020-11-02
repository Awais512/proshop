import mongoose from 'mongoose';
import env from 'dotenv';
import colors from 'colors';
env.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb Connected on: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;
