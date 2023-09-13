"use client"
import React from "react"
import { useEffect } from "react"
import axios from "axios"
import Image from 'next/image'
import Sidebar from "@/app/components/Sidebar"
import Post from "@/app/post/page"
import { useUserPostsQuery } from "@/redux/services/postApi"
export default  function(){
let userId:any=localStorage.getItem("userId")
let username:any=localStorage.getItem("username")
console.log("userId in profile",userId,username)

const {data}:any=useUserPostsQuery(userId)
const result=data?.postData
console.log("userdata",result)
    return(
       <>
       
    <div className="w-[100vw] ">

       <> <div className="md:w-[20vw] sm:hidden hidden md:flex  left-0 bg-slate-300 h-[100vh] fixed"><Sidebar/></div></>
        
        <section className="relative p-5 bg-slate-400 top-0 md:left-[20vw] w-[100vw] sm:w-[100vw] md:w-[80vw]  flex flex-row justify-start items-center gap-x-10  ">
           <figure className="sm:w-28 sm:h-28 w-20 h-20 rounded-full  bg-slate-700 flex justify-center items-center ">Image</figure>
           <div className="sm:text-[100px] text-[40px]">{username}</div>
            <div className="rounded-full bg-slate-900 absolute top-5 right-5 w-10 h-10 flex items-center justify-center">edit</div>
        </section>
        <section className=" md:left-[20vw] p-5 w-[100vw] sm:w-[100vw]  relative  md:w-[80vw]  bg-slate-800 sm:min-h-[100vh] min-h-[100vh] flex flex-col gap-2  justify-center items-center ">
        {result?.map((post:any)=>(
            <Post post={post}/>
        ))}
        </section>

    </div>
       </>
    )
}