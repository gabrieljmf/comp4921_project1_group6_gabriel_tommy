import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecting to MongoDB.");
  } catch (error) {
    console.log("Failed to Connect to MongoDB.");
  }
};

export default connectMongoDB;
