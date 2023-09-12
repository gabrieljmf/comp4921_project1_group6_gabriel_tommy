import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../../lib/mongo/mongodb";
import { GithubProfile } from "next-auth/providers/github";
let db;
let client;

export const options = {
  providers: [
    GitHubProvider({
      // profile(profile) {
      //   console.log(profile);
      //   return {
      //     ...profile, //gets everything from the GH profile
      //     role: profile.role ?? "user",
      //     id: profile.id.toString(),
      //     // image: profile.avatar_url,
      //   };
      // },
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
        const dbUser = { id: "42", username: "test", password: "asdf" };
        //TODO: Uncomment code. This is Tommy's working db code
        // let dbUser;
        // if (!db) {
        //   try {
        //     client = await clientPromise;
        //     db = await client.db("4921-project1");
        //     dbUser = await db
        //       .collection("users")
        //       .findOne({ username: credentials?.username });
        //     // .select("+password");
        //   } catch (error) {
        //     throw new Error("Failed to establish connection to database");
        //   }
        // }

        // if (credentials?.password === dbUser.password) {
        if (
          credentials?.username === dbUser?.username &&
          credentials?.password === dbUser.password
        ) {
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
  // session: {
  //   jwt: true,
  //   strategy: "jwt",
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (session?.user) session.user.role = token.role;
  //     return session;
  //   },
  // },

  // async session(session, token) {
  //   session.user = token.user;
  //   return session;
  // },
  // async jwt(token) {
  //   if (typeof user !== typeof undefined) {
  //     token.user = username;
  //   }
  //   return token;
  // },
};

export default NextAuth(options);

// TODO: https://www.reddit.com/r/nextjs/comments/q02t3y/how_to_send_user_info_in_a_nextauth_session/
// https://next-auth.js.org/configuration/callbacks#session-callback
// https://next-auth.js.org/getting-started/example
// https://stackoverflow.com/questions/73069186/why-cant-i-access-session-data-that-exists-before-the-return-statement-in-nextj
// can't log in with git hub because there is no user based on the github user/pw info
