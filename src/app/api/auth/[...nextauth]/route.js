import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import {connectMongoDB} from "../../../../../lib/mongodb"
import User from "../../../../../models/user"

const authOptions = {
    providers: [
  CredentialsProvider({
    name: 'credentials',
   
    credentials: {},
    async authorize(credentials) {

        const {email , password} = credentials;

        try {
            await connectMongoDB();
            const user = await User.findOne({email});

            if(!user) {
                return null;
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if(!isPasswordCorrect) {
                return null;
            }

            return user;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
  })
],
session: {
    strategy : "jwt",
},
secret: process.env.NEXTAUTH_SECRET,
pages: {
    signIn: "/login"
}
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}