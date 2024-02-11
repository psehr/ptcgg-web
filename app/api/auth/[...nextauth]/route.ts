import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import db from "@/lib/db";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!user?.email) {
        throw new Error("No profile");
      }

      let dbUser = db.collection("users").doc(`${user.email}`);

      !(await dbUser.get()).exists
        ? await dbUser.create({
            creation_date: new Date().toUTCString(),
            last_logged: new Date().toUTCString(),
            email: user.email,
            name: user.name,
            image: user.image,
          })
        : await dbUser.update({ last_logged: new Date().toUTCString() });
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
