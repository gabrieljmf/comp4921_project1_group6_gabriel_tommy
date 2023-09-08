import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <>
      <main>
        {/* {session ? ( */}
        <Button>
          <Link href="/">Log Out {session?.user}</Link>
        </Button>
        {/* ) : (
          <h1>No session started</h1>
        )} */}
      </main>
    </>
  );
}
