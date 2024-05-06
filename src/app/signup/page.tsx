import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { User } from '@/models/userModel'
import { hash } from 'bcryptjs'
import { redirect } from 'next/navigation'
import { connectToDB } from '@/lib/utils'
  

const Page = () => {

    

    const singUP = async(formData : FormData)=>{
        "use server"
      const name = formData.get("name") as string | undefined
      const email = formData.get("email") as string | undefined
      const password = formData.get("password") as string | undefined

      if (!email || !password || !name) {
         throw new Error("Please provide all filed")
      }

      // connection with db
      // try {
        await connectToDB()
  
        const user =  await User.findOne({email})
        if (user) {
          throw new Error("User alredy exist")
        }
  
        const hashPassword = await hash(password,10)
  
        // create user
  
        await User.create({
          name, email,
          password:hashPassword
        })
  
        redirect("/login")

      // } catch (error) {
      //   console.log("[error_in_signup",error)
      // }



   }




  return (
    <div className='flex justify-center items-center h-dvh'>
       <Card>
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
            </CardHeader>
            <CardContent >
               <form action={singUP}
               className='flex flex-col gap-4'>
               <Input type='text' placeholder='Name' name='name'/>
               <Input type='text' placeholder='Email' name='email'/>
                <Input type='password' placeholder='password' name='password'/>
                 <Button type='submit'>Signup</Button>
               </form>
            </CardContent>
            <CardFooter className='flex flex-col gap-4'>
                <span>Or</span>
                <form action="">
                    <Button type='submit' variant={"outline"}>Login with Google</Button>

                </form>
                <Link href={"/login"}> already have account? Login</Link>
            </CardFooter>
      </Card>

    </div>
  )
}

export default Page
