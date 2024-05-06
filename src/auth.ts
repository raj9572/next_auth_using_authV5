import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import email from "next-auth/providers/email"
import { User } from "./models/userModel"
import {compare} from 'bcryptjs'
import { connectToDB } from "./lib/utils"



//connect with db
// custom page for login and signup both

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
        name:"Credential",
        credentials:{
            email:{
                label:"Email",
                type:"email"
            },
            password:{
                label:"Password",
                type:"password"
            }
        },

        authorize: async(credentials) =>{

            const email = credentials.email as string | undefined ;
            const password = credentials.password as string | undefined;


            if (!email || !password) {
                throw new CredentialsSignin({cause:"Email and Password are required"})
            }

             // connnect to db
             await connectToDB()

             const user = await User.findOne({email}).select("+password")

             if (!user) {
                throw new CredentialsSignin({cause:"Invalid Email or Password"})
             }

             if (!user.password) {
                throw new CredentialsSignin({cause:"Invalid Email or Password"})
                
             }

             const isMatchPassword = await compare(password,user.password)

             if (!isMatchPassword) {
                throw new CredentialsSignin({cause:"Invalid Email or Password"})
             }

             return {name:user.name, email:user.email, id:user._id}


           



    } 
 })
  ],
  callbacks:{},
  pages:{
    signIn:"/login"
  },

})


