'use client'

import { toast } from "sonner"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { credentialLogin } from "@/actions/login"
import { useRouter } from "next/navigation"


const LoginForm = () =>{
  const router = useRouter()

    return <form action={ async(formData) =>{

          const email = formData.get("email") as string
          const password = formData.get("password") as string

          if(!email || !password)  return toast.error("Please provide all field")

            const toastId = toast.loading("Loggin in")

            const error = await credentialLogin(email,password)

            if(!error) {
                toast.success("Login successfull",{
                    id:toastId
                })

                // router.refresh()
                router.push("/")
                
            }{
                toast.error(String(error),{
                    id:toastId
                })
            }

            }} className='flex flex-col gap-4'>
            <Input type='text' placeholder='Email' name='email'/>
            <Input type='password' placeholder='password' name='password'/>
             <Button type='submit'>Login</Button>
      </form>
}

export {LoginForm}