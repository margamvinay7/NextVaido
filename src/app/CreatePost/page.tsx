"use client"
import React, { useEffect } from 'react'
import { useAddPostMutation,usePostsQuery } from '@/redux/services/postApi';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64'
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/navigation';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
export default function CreatePost(){
    const dispatch=useDispatch();
    const router=useRouter();
    const [title,setTitle]=React.useState("");
    const [post,setPost]=React.useState("");
    const [image,setImage]=React.useState("");
    const [createPost]=useAddPostMutation();
   let userId=localStorage.getItem("userId")
  
   
    const postData={
        userId:userId,
        title,
        post,
        image
    }
  
    const onSubmit=async()=>{
        console.log("entered onsubmit")
        const result= await createPost(postData)
        console.log(result)
        router.push('/posts')

        
        

    }
    return(
        <>
            <div className="md:w-[20vw] sm:hidden hidden md:flex  left-0 bg-slate-300 h-[100vh] fixed"><Sidebar/></div>  
        
        <div className="login">
        <div className="flex flex-col gap-2 items-center justify-center h-[70vh] py-2 bg-slate-900 w-[50vw] rounded-xl ">
            <h1>CREATE POST</h1>
            <input className="w-[80%] h-10 rounded-sm placeholder-shown:border-gray-500 bg-black text-center " placeholder="Title of post" type="text" onChange={(e)=>setTitle(e.target.value)}></input>
           
            <textarea className="w-[80%] h-20 rounded-sm placeholder-shown:border-gray-500 bg-black text-center "   placeholder=" post" onChange={(e)=>setPost(e.target.value)} ></textarea>
            
      <div className='w-[80%]'>     
    <FileBase type="file" multiple={false} onDone={({base64}:any)=>setImage(base64)}  />
    <button onClick={onSubmit}>submit</button>
    </div> 
            
        </div>
        </div>
        </>
    )
}