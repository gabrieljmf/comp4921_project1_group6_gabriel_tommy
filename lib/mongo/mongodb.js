import { Server } from "mongodb/lib/core";
import MongoClient from "mongodb/lib/mongo_client";

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error("Please add your Mongo URI to .env");

let client = new MongoClient(new Server(URI), options);
let clientPromise;

clientPromise = client.connect();
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
