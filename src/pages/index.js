import { Center, useColorMode } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
    <>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <Center margin={4}>
        <Button>
          <Link href="/landing">Go to Landing</Link>
        </Button>
      </Center>
      <Center margin={4}>
        <Button>
          <Link href="/signUp">Sign Up!</Link>
        </Button>
      </Center>
      <ColorToggler />
    </>
  );
}
