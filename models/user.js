import mongoose from "mongoose";

// const { Schema, model } = mongoose;
const { Schema } = mongoose;
const userSchema = new Schema({
  username: String,
  password: String,
  type: String,
});

// const User = model("user", userSchema);
// export default user;
export default Schema;
