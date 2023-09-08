import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "nerdslayee0",
        },
        password: {
          label: "Password: ",
          type: "text",
          placeholder: "",
        },
      },
      async authorize(credentials) {
        // This is where you retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // TODO: add this test user to database to test auth
        const user = {
          id: "31",
          name: "gabrielfair@hotmail.com",
          password: "asdf",
        };

        // TODO: add database address here
        // const res = await fetch("/enter/database/here", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // TODO: Session data
  pages: {
    session: {
      strategy: "database",
      maxAge: 60 * 60,
      updateAge: 24 * 60 * 60,
      generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex");
      },
    },
  },
};
// TODO: WIP

// }

//   pages: {
//   signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error',
//     verifyRequest: '/auth/verify-request',
//       newUser: '/auth/new-user'
