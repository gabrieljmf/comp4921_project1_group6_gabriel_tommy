import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>COMP 4721 Project 1 by Gabriel and Tommy</title>
        <meta name="description" content="assignment by Patrick Guichon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
