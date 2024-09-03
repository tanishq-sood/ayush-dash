import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { User, NextAuthConfig } from "next-auth"

export const BASE_PATH = "/api/auth";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async(credentials): Promise<User | null> => {
        let user = null

        if (!user) {
          return null;
        }

        return user;
      }
    })
  ],
} satisfies NextAuthConfig