import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages:{
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials){
                return null;
            }

            if(credentials.email === "alefgaigher@hotmail.com" && credentials.password === "123"){
                return {
                    id: "1",
                    name: "alef",
                    email: "alefgaigher@hotmail.com"
                }
            }
            // const res = await fetch("/your/endpoint", {
            //   method: 'POST',
            //   body: JSON.stringify(credentials),
            //   headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()
            // if (res.ok && user) {
            //   return user
            // }
            // return null

            return null;
          },
        }),
      ],
});

export { handler as GET, handler as POST }