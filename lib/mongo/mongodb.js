// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Add Mongo URI to .env.local");
// }

// // TODO: Ask Tommy what line 17 is for, i don't have a NODE_ENV. If not in "development", client is never defined
// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
