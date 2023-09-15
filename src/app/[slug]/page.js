import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

export default async function Page({ params }) {
  const redis = Redis.fromEnv(
    process.env.UPSTASH_REDIS_REST_URL,
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
  console.log();
  const views =
    (await redis.get) < 3 > ["pageviews", "projects", params.slug].join(":") ??
    0;

  return (
    <div>
      <ReportView slug={params.slug} />
      {/* Add your page content here */}
      Slug Test {params.slug}
    </div>
  );
}
