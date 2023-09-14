import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log(path)

  const token = request.cookies.get('token')?.value || ''
  const isPublicPath = path === '/login' || path === '/' || path === '/verifyemail' 
//   const protect = path==='/profile'|| path==='CreatePost'||path==='UpdatePost'
//  if(protect){
//  if(!token){
// return NextResponse.redirect(new URL('/login',request.nextUrl))
//  }
//  }
  
console.log("middleware")
  if(isPublicPath && token) {
    console.log("middleware ok")
    return NextResponse.redirect(new URL('/posts', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    console.log("middleware not ok")
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/CreatePost',
    '/UpdatePost',
    '/posts',
    '/profile/:id',
    '/login',
    
    '/verifyemail'
  ]
}