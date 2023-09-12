import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../../lib/mongo/mongodb";

let db;
let client;

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
          label: "Username",
          type: "text",
          placeholder: "nerdslayee0",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "none",
        },
      },
      async authorize(credentials) {
        let dbUser;
        if (!db) {
          try {
            client = await clientPromise;
            db = await client.db("4921-project1");
            dbUser = await db
              .collection("users")
              .findOne({ username: credentials?.username });
            // .select("+password");
          } catch (error) {
            throw new Error("Failed to establish connection to database");
          }
        }

        if (credentials?.password === dbUser.password) {
          return dbUser;
        } else {
          return null;
        }
      },
    }),
  ],
  //TODO: Pages --> sign up
  // pages: {
  //   signUp: "/signUp",
  // },
  session: {
    // jwt: true,
    strategy: "jwt",
    // maxAge: 60 * 60,
    // updateAge: 60 * 60,
    // generateSessionToken: () => {
    //   return randomUUID?.() ?? randomBytes(32).toString("hex");
    // },
  },
  callbacks: {
    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt(token) {
      if (typeof user !== typeof undefined) {
        token.user = username;
      }
      return token;
    },
  },
};

export default NextAuth(options);

// TODO: https://www.reddit.com/r/nextjs/comments/q02t3y/how_to_send_user_info_in_a_nextauth_session/
// https://next-auth.js.org/configuration/callbacks#session-callback
// https://next-auth.js.org/getting-started/example
// https://stackoverflow.com/questions/73069186/why-cant-i-access-session-data-that-exists-before-the-return-statement-in-nextj
// can't log in with git hub because there is no user based on the github user/pw info
