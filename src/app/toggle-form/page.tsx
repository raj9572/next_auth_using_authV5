import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Page = () => {







    return (
        <div className='flex justify-center items-center h-dvh'>
            <Tabs defaultValue="signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you re done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type='text' id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input type='email' id="emal" defaultValue="@peduarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id="password" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type='submit'>Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you will be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                        <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type='text' id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id="password" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>


    )
}

export default Page
