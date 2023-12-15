"use client"
import React, { useEffect } from 'react'
import { useUpdatePostMutation,usePostsQuery } from '@/redux/services/postApi';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
export default function UpdatePost(){

    const router=useRouter();
   const postData=useSelector((state:any)=>state.post)
    console.log("updated post",postData.post)
  const data=postData.post;
    const [title,setTitle]=React.useState(data.title);
    const [post,setPost]=React.useState(data.post);
    const [image,setImage]=React.useState(data.image);
    const [updatePost]=useUpdatePostMutation();
    const posts={
        username:"",
        title,
        post,
        image
    }
   const id=data._id;
    const onSubmit=async()=>{
        console.log("entered onsubmit updatePost")
        const result= await updatePost({id,posts})
        console.log("updated send",result)
        router.push('/posts')
        

        
        

    }
    return(
        <div className="login">
        <div className="loginform">
            <h1 className='login-header'>Update </h1>
            <input className="input-button placeholder:text-sky-800" placeholder="Title of post" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
           
            <textarea className=" input-button placeholder:text-sky-800"   placeholder=" post" value={post} onChange={(e)=>setPost(e.target.value)} ></textarea>
            
            <label  className="input-button   bg-white  flex items-center justify-center"><span className="text-sky-800">Select File</span>
            <span id="file">
            <FileBase type="file"  multiple={false} onDone={({base64}:any)=>setImage(base64)}/>
            </span>
            </label> 
    <button  className='login-button' onClick={onSubmit}>submit</button>
            
        </div>
        </div>
    )
}