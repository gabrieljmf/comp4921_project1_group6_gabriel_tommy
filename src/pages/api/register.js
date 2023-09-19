import bcrypt from "bcryptjs";
import clientPromise from "../../../lib/mongo/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const database = client.db("userList");
  if (req.method === "POST") {
    const { username, password } = req.body;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let myPost = await database
      .collection("users")
      .insertOne({ username, password: hashedPassword });
    return res.status(201).json();
  } else {
    res.status(500);
  }
}
