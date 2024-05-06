"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LogoutUser = () => {
 const router = useRouter()
    const handleSignOut = () =>{
        signOut()
        // router.push("/login")
        router.refresh()
    }
  return (
    <Button onClick={handleSignOut}>Signout</Button>
  )
}

export default LogoutUser
