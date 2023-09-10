import { Heading } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
// import { options } from "@/app/api/auth/[...nextauth]/options";
// import { getServerSession } from "next-auth/next";
// import { redirect } from "next/navigation";

// const landing = async () => {
const landing = () => {
  // const session = await getServerSession(options);
  // if (!session) {
  //   redirect("api/auth/signin?callbackUrl=/landing");
  // }
  return (
    <>
      <Heading>Welcome! </Heading>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  );
};

export default landing;
