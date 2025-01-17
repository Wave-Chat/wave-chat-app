import { Backend_URL } from "../lib/Constants";
import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.username || !credentials?.password) return null;
  
          const res = await fetch(`${Backend_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });
  
          if (!res.ok) {
            console.log("Failed to login:", res.statusText);
            return null;
          }
  
          const user = await res.json();
          return user || null;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          return { ...token, ...user };
        }
        console.log(token)
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        console.log(session)
        return session;
      },
    },
    session: {
      strategy: "jwt",
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      maxAge: 60 * 60, // 1 hour
    },

  };