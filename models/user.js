import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  type: String,
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
