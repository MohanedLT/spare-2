import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT (default: 30 days)
  },
  callbacks: {
    // Sign in, session callback
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin", // custom signin page
  },
};
