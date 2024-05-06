import { NextRequest, NextResponse } from "next/server";
import {decode,encode} from "next-auth/jwt"
import { cookies } from "next/headers";

export async function GET(req:NextRequest) {
    // console.log('request',req.headers.get("x-hello-from-middleware1"))
    try {
        const cookie = cookies().get("authjs.session-token")
        const decodeToken = await decode({
            token:cookie?.value!,
            salt:cookie?.name!,
            secret:process.env.AUTH_SECRET!
        })

        return NextResponse.json({message:decodeToken})
        
    } catch (error:any) {
        return NextResponse.json({message:error.message})
    }
}