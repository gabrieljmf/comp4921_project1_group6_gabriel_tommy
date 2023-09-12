import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongo/mongoose";
import clientPromise from "../../../lib/mongo/mongodb";
import User from "../../../models/user";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("4921-project1");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      let myPost = await db.collection("users").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
  }
}
