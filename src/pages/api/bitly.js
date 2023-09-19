import clientPromise from "../../../lib/mongo/mongodb";
import fetch from "node-fetch";

export default async function shortenLink(req, res) {
  //   const client = await clientPromise;
  //   const database = client.db("bitly");
  if (req.method === "POST") {
    console.log(req.body.long_url);
    var fetchURL = "https://api-ssl.bitly.com/v4/shorten";
    var header = {
      Authorization: "Bearer 46a145052835cd7b0a9920f73574efa2a0445b9a",
      "Content-Type": "application/json",
    };
    var payload = {
      domain: "bit.ly",
      long_url: req,
    };
    var options = {
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    };
    try {
      const response = await fetch(fetchURL, options);
      if (response.status === 200) {
        const data = await response.json();
        return data.link;
        // return res.status(200).json(data.link);
      } else {
        console.log(
          "Bitly API request failed:",
          response.status,
          response.statusText
        );
        res.status(500).json({ error: "Bitly API request failed" });
      }
    } catch (error) {
      console.error("Error while making Bitly API request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(500);
  }
}
