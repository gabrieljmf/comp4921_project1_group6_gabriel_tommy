import clientPromise from "../../../lib/mongo/mongodb";
import fetch from "node-fetch";

export default async function handler(req, res) {
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
      long_url:
        "https://www.google.com/search?q=bitly&sca_esv=561038293&ei=Yi7uZOaXCuHu0PEPrJ6xiAw&ved=0ahUKEwjm0IXatYKBAxVhNzQIHSxPDMEQ4dUDCA8&uact=5&oq=bitly&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWJpdGx5MhMQLhiKBRixAxiDARjHARjRAxhDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMiIQLhiKBRixAxiDARjHARjRAxhDGJcFGNwEGN4EGOAE2AEDSJkOUIoHWKQMcAJ4AZABAJgBYKABhQOqAQE1uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAg4QABjkAhjWBBiwA9gBAcICFhAuGIoFGMcBGNEDGMgDGLADGEPYAQLCAhAQLhiKBRjIAxiwAxhD2AECwgINEC4YigUYxwEY0QMYQ8ICERAuGIAEGLEDGIMBGMcBGNEDwgIIEC4YsQMYgATCAgsQLhiABBixAxiDAcICCxAuGIoFGLEDGIMBwgIREC4YigUYsQMYgwEYxwEY0QPCAg4QLhiABBixAxjHARjRA8ICHBAuGIoFGMcBGNEDGEMYlwUY3AQY3gQY4ATYAQPCAgcQABiKBRhDwgINEAAYigUYsQMYgwEYQ8ICCBAuGIAEGLEDwgIEEAAYA8ICCBAAGIAEGLED4gMEGAAgQYgGAZAGEroGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp",
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
        return res.status(200).json(data);
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
