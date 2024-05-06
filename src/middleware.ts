import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { auth } from './auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    
    const token = await auth()
    const url = request.nextUrl
    console.log("token", token)


    if (token &&
        (
            url.pathname.startsWith("/login") ||
            url.pathname.startsWith("/signup")
        )
    ) {
        console.log('run')
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (!token) {
        if (url.pathname.startsWith('/toggle-form')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        if (url.pathname === "/") {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    

    return NextResponse.next()




}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/toggle-form",
        "/login",
        "/signup",
        "/api/:path*"
    ],
}