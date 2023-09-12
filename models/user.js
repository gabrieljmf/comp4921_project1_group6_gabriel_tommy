import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  type: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
// export default user;
export default User;
