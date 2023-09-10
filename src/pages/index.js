import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>COMP 4721 Project 1 by Gabriel and Tommy</title>
        <meta name="description" content="assignment by Patrick Guichon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Button>
          <Link href="/landing">Go to Landing</Link>
        </Button>
        <Button>
          <Link href="/signUp">Sign Up!</Link>
        </Button>
      </main>
    </>
  );
}
