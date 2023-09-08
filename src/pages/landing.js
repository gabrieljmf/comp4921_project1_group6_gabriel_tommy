import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const landing = () => {
  return (
    <>
      <Heading>Welcome to the landing page!</Heading>
      <Button>
        <Link href="/profile">Go to Profile</Link>
      </Button>
    </>
  );
};

export default landing;
