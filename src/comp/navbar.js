import { Box, Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data, status } = useSession();
  return (
    <Flex
      bgGradient="linear(to-t, gray.800, gray.600)"
      border={"none"}
      textAlign={"end"}
      p={4}
      pt={6}
    >
      <Center ml={10} borderTop={"4px"} borderLeft={"2px"}>
        <Heading as="h1" size="2xl" fontWeight={"hairline"}>
          Project DOT.post
        </Heading>
      </Center>

      {status === "authenticated" && (
        <Button onClick={() => signOut()} pos={"relative"}>
          Sign out
        </Button>
      )}
      <Spacer />
      {status === "unauthenticated" && (
        <Center>
          <Button mx={8}>
            <Link href="/signUp">Sign Up!</Link>
          </Button>
          <Button onClick={() => signIn()}>Sign in</Button>
        </Center>
      )}
    </Flex>
  );
};

export default Header;
