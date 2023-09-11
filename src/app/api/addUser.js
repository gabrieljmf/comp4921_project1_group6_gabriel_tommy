import clientPromise from "../../../lib/mongo/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const { userName, userPassword } = req.body;

    const post = await db.collection("user").insertOne({
      username,
      userPassword,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
