"use client"
import Post from '../post/page'
import { useEffect, useState } from 'react'
import { usePostsQuery,useSearchPostsQuery } from '@/redux/services/postApi'

import { BsSearch } from "react-icons/bs";
export default function Posts(){
    const [posts,setPosts]=useState<any>([])
    const [postData,setPostData]=useState<any>([])
    const [search,setSearch]=useState<string>("")
    const [searched,setSearched]=useState<boolean>(false)
    const handleSearch=()=>{
        console.log("clicked")
        setSearched(true)
      }
      
     const {data:searchPost}:any =useSearchPostsQuery(search)
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
        <>
        <div className='w-[100vw] '>
           
          {/* // <section><Search/></section>  */}
         <section className=' flex flex-row md:h-12  bg-black justify-center '>
           <div className='fixed top-2 sm:left-32 md:left-96 md:w-96 z-10 flex bg-white rounded-sm '>
           <input type='text' onChange={(e)=>setSearch(e.target.value)} className='  h-10 w-3/4  border-solid text-center  border-2 mr-3 text-black  ' placeholder='Search post by title' />
           <button className='   md:absolute md:right-0 hover:bg-white rounded-full' onClick={handleSearch}><BsSearch style={{
                    color: "black",
                    
                    padding: 5,
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    
                  }}/></button>
            </div>
    </section>
         
        <section   className="  w-[100vw]   relative py-3  bg-black sm:min-h-[100vh] min-h-[100vh] flex flex-col gap-2  justify-center items-center ">
            {postData?.map((post:any)=>(
                <Post post={post} key={post._id}/>

            ))}
        
        </section>
        
        </div>
        
    </>
    )
}