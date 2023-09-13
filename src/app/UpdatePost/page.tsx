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
        <div className="flex flex-col gap-2 items-center justify-center h-[70vh] py-2 bg-slate-900 w-[50vw] rounded-xl ">
            <h1>Update post</h1>
            <input className="w-[80%] h-10 rounded-sm placeholder-shown:border-gray-500 bg-black text-center " placeholder="Title of post" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
           
            <textarea className="w-[80%] h-20 rounded-sm placeholder-shown:border-gray-500 bg-black text-center "   placeholder=" post" value={post} onChange={(e)=>setPost(e.target.value)} ></textarea>
            
      <div className='w-[80%]'>     
    <FileBase type="file" multiple={false} onDone={({base64}:any)=>setImage(base64)}   />
    <button onClick={onSubmit}>submit</button>
    </div> 
            
        </div>
        </div>
    )
}