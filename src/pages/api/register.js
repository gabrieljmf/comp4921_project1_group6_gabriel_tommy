import connectMongoDB from "../../../lib/mongo/mongoose";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "POST") {
    const { username, password } = req.body;
    const saltRounds = 12;

    // Verify if user exist
    // Verify if password is valid

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    User.create({ username, password: hashedPassword });

    return res.status(201).json();
  } else {
    res.status(405);
  }
}
