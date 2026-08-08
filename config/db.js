import mongoose from "mongoose";

const connectDB = async () => {
  try {

    console.log("MongoDB Connecting...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected Successfully");

  } catch (error) {

    console.log("❌ MongoDB Connection Error:");
    console.log(error.message);

  }
};

export default connectDB; 