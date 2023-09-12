import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecting to MongoDB.");
  } catch (error) {}
};

export default connectMongoDB;
