"use server"

import { signIn, signOut } from "@/auth"
import { CredentialsSignin } from "next-auth"

const credentialLogin = async (email:string, password:string) => {
  
   try {
     await signIn("credentials",{
       email,
       password,
       // redirect:true,
       // redirectTo:"/"
     })
       
   } catch (error) {
      const err = error as CredentialsSignin
      return err.cause
   }

   
 }

 const handleLogout = async() =>{
    
      await signOut()
   }

 export {credentialLogin, handleLogout}