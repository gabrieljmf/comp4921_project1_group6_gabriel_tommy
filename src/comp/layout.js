import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Head title="COMP 4721 Project 1 by Gabriel and Tommy">
        <meta name="description" content="assignment by Patrick Guichon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box h={"100vh"} pos={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
