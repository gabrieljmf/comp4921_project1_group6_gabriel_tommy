import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userScehma = new Schema({
  user: String,
  password: String,
});

const User = model("user", userSchema);
export default user;
