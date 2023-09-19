// import { SessionContext, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
// import { getToken, signOut, signIn } from "next-auth/react";
import { Button } from "@chakra-ui/react";

const Profile = () => {
  const session = useSession();
  // const session = getToken();
  // const landing = () => {
  // const session = getServerSession(options);
  // if (!session) {
  //   redirect("api/auth/signin?callbackUrl=/landing");
  // }
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.data} <br />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
    </>
  );
};

export default Profile;
