import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "Demo Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (
          credentials.email === "demouser@gmail.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: "demo-user",
            name: "Demo User",
            email: "demouser@gmail.com",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRnBq6Xq-BfQ28sE4CgojkngtJAkSR_g88A&s"
          };
        }

        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
}