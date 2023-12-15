"use client"
import React from "react"
import { useEffect } from "react"
import axios from "axios"
import Image from 'next/image'
import Logo from '@/public/profile.svg'
import Post from "@/app/post/page"


import { useUserPostsQuery } from "@/redux/services/postApi"
import { useUserQuery } from "@/redux/services/userApi"
export default  function Profile(){
let userId:any=localStorage.getItem("userId")
let username:any=localStorage.getItem("username")
console.log("userId in profile",userId,username)
const { data :userData }:any=useUserQuery(userId)
const userd=userData?.UserData
console.log("user Data",userData)
console.log("userd",userd?.[0]?.image)
const {data}:any=useUserPostsQuery(userId)
console.log(data)
const result=data?.postData
console.log("usersPostdata",result?.title)
    return(
       <>
    
    <div className="w-[100vw] bg-black  ">
   

        
        <section className="relative p-5 bg-black top-0 md:left-[20vw] w-[100vw] sm:w-[100vw] md:w-[80vw]  flex flex-row justify-start items-center gap-x-10  ">
           <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full  bg-black flex justify-center items-center ">
           <Image src={userd?.[0]?.image || Logo } width={60}  height={60} alt="image check"  />
           </div>
           <div className="sm:text-[20px] text-[10px] text-white">{username}</div>
            
        </section>
        <hr/>
        <div className="flex w-full justify-center">Posts</div>
        <hr/>
        
        
    
    
        
        <section className=" md:left-[20vw] p-5 w-[100vw] sm:w-[100vw] relative   md:w-[80vw]  bg-black sm:min-h-[100vh] min-h-[100vh] flex flex-col gap-2  justify-center items-center ">
            
        {result?.map((post:any)=>(
            <Post post={post} key={post._id}/>
        ))}
        </section>

    </div>
       </>
    )
}