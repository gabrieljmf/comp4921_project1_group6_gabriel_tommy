import { Center, Flex, useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

function ColorToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Center>
  );
}

export default function Home() {
  return (
    <Flex justifyContent={"center"}>
      <Center margin={4}>
        <Button>
          <Link href="/landing">Go to Landing</Link>
        </Button>
      </Center>
      <ColorToggler />
    </Flex>
  );
}
