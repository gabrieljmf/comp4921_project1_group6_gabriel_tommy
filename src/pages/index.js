import { signIn, signOut, useSession } from "next-auth/react";

const HomePage = () => {
  const { data, status } = useSession();

  return (
    <>
      {JSON.stringify(data || {})}
      {JSON.stringify(status || {})}
      {status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign In</button>
      )}
      {status === "authenticated" && (
        <button onClick={() => signOut()}>Sign Out</button>
      )}
    </>
  );
};

export default HomePage;

// import { Center, useColorMode } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import Link from "next/link";

// function ColorToggler() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <Center>
//       <Button onClick={toggleColorMode}>
//         Toggle {colorMode === "light" ? "Dark" : "Light"}
//       </Button>
//     </Center>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <Center margin={4}>
//         <Button>
//           <Link href="/landing">Go to Landing</Link>
//         </Button>
//       </Center>
//       <Center margin={4}>
//         <Button>
//           <Link href="/signUp">Sign Up!</Link>
//         </Button>
//       </Center>
//       <ColorToggler />
//     </>
//   );
// }
