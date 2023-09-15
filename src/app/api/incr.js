//View counter code found at: upstash.com/blog/nextjs13-approuter-view-counter

import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

//import for Redis middleware
const redis = Redis.fromEnv();

export const config = {
  runtime: "edge",
};

// Pass slug identifier into request body or return 400 code
export default async function incr(req) {
  const body = await req.json();
  const slug = body.slug;
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  // Get user IP address
  const ip = req.ip;
  // Hash the IP and turn it into a hex string
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip)
  );
  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Checks if a specific IP has viewed in 12 hours
const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
  nx: true,
  ex: 12 * 60 * 60,
});
if (!isNew) {
  new NextResponse(null, { status: 202 });
}

// Increment slug
await redis.incr(["pageviews", "projects", slug].join(":"));
return new NextResponse(null, { status: 202 });
