import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../../../../firebase/firebase";

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

        // const res = await fetch(`http://localhost:8001/users?email=${email}&senha=${password}`, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' }
        // });
        // const users = await res.json();
        // if (res.ok && users.length > 0) {
        //   return users[0];
        // } else {
        //   return null;
        // }
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email as string,
            password as string
          );
          const user = userCredential.user;
          console.log(user);
          // Obtenha o displayName do usuário
          const displayName = user.displayName || 'Usuário';

          if (user) {
            return {
              id: user.uid,
              name: displayName,
              email: user.email,
            };
          }
          return null;
        } catch (error) {
          console.error("Firebase sign-in error:", error);
          return null;
        }
      },      
    }),
    
  ],
});

export { handler as GET, handler as POST };
