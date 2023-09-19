import { Box, Center, Flex, Grid, Input, useColorMode } from "@chakra-ui/react";
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
    <Grid justifyContent={"center"} templateColumns="repeat(3, 1fr)">
      <Box>
        <Center margin={4}>
          <Button>
            <Link href="/landing">Go to Landing</Link>
          </Button>
        </Center>
      </Box>
      <Box>
        <Center margin={4}>
          <Button>
            <Link href="/landing">Go to Landing</Link>
          </Button>
        </Center>
      </Box>
      <Box>
        <ColorToggler />
      </Box>
      <Box gridColumn={(0, 2)}>
        <Input></Input>
      </Box>
    </Grid>
  );
}
