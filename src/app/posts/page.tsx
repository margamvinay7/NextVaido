"use client"
import Post from '../post/page'
import { useEffect, useState } from 'react'
import { usePostsQuery,useSearchPostsQuery } from '@/redux/services/postApi'
import Sidebar from '../components/Sidebar'
import Search from '../Search/page'
export default function Posts(){
    const [posts,setPosts]=useState<any>([])
    const [postData,setPostData]=useState<any>([])
    const [search,setSearch]=useState<string>("search")
    const [searched,setSearched]=useState<boolean>(false)
    const handleSearch=()=>{
        console.log("clicked")
        setSearched(true)
      }
      
     const {data:searchPost}:any  =useSearchPostsQuery(search)
    const {data}=usePostsQuery();
       
    useEffect(()=>{
        setPosts(data)
console.log("posts",posts?.postData)
setPostData(posts?.postData)
console.log("postData",postData)
if(search){
    console.log("search")
    setPosts(searchPost)
console.log("search post",posts?.postData)
setPostData(posts?.postData)
console.log("postData search",postData)
}
    },[postData,data,posts,searched,search,searchPost])
  

    
    return(
        <div className='w-[100vw] relative'>
           <aside className="md:w-[20vw] sm:hidden hidden md:flex  left-0 bg-slate-300 h-[100vh] fixed"><Sidebar/></aside>  
           <section className=' flex flex-row md:h-12 w-[100vw] '>
            
            <input type='text' onChange={(e)=>setSearch(e.target.value)} className='  h-12  border-solid text-center text-black border-slate-900 border-2 rounded-lg w-[90vw] md:w-[70vw] md:absolute md:left-[20vw]' placeholder='Search post by title' />
           <button className='bg-blue-600 w-[20vw] md:w-[10vw] md:h-12 md:absolute md:right-0' onClick={handleSearch}>search</button>
           </section>
        <section   className=" md:left-[20vw] p-5 w-[100vw] sm:w-[100vw]  relative  md:w-[80vw]  bg-slate-800 sm:min-h-[100vh] min-h-[100vh] flex flex-col gap-2  justify-center items-center ">
            {postData?.map((post:any)=>(
                <Post post={post} key={post._id}/>

            ))}
        
        </section>
        </div>
    )
}