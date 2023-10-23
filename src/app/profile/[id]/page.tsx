"use client"
import React from "react"
import { useEffect } from "react"
import axios from "axios"
import Image from 'next/image'
import Sidebar from "@/app/components/Sidebar"
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
    
    <div className="w-[100vw] outline oultine-white  ">
   
       <> <div className="md:w-[20vw] sm:hidden hidden md:flex  left-0 bg-slate-300 h-[100vh] fixed"><Sidebar/></div></>
        
        <section className="relative p-5 bg-slate-950 top-0 md:left-[20vw] w-[100vw] sm:w-[100vw] md:w-[80vw]  flex flex-row justify-start items-center gap-x-10  ">
           <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full  bg-slate-700 flex justify-center items-center ">
           <Image src={userd?.[0]?.image} width={60}  height={60} alt="image check"  />
           </div>
           <div className="sm:text-[50px] text-[20px]">{username}</div>
            
        </section>
        <div className="outline outline-1 md:hidden bg-black oultine-white m-1  w-full md:w-[80vw]  h-8 p-1 text-center ">
        posts  
    </div>
        
        
    
    
        
        <section className=" md:left-[20vw] p-5 w-[100vw] sm:w-[100vw] relative   md:w-[80vw]  bg-slate-800 sm:min-h-[100vh] min-h-[100vh] flex flex-col gap-2  justify-center items-center ">
            
        {result?.map((post:any)=>(
            <Post post={post} key={post._id}/>
        ))}
        </section>

    </div>
       </>
    )
}