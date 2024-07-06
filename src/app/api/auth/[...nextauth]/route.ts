import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const email = credentials?.email;
        const password = credentials?.password;

        const res = await fetch(`http://localhost:8001/users?email=${email}&senha=${password}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        const users = await res.json();
        if (res.ok && users.length > 0) {
          return users[0];
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
