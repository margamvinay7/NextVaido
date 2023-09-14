"use client"
import { useSearchPostsQuery } from "@/redux/services/postApi"
import { useState } from "react"
export default function Search(){
    const [search,setSearch]=useState<string>("search")
    const [searched,setSearched]=useState<boolean>(false)
    const handleSearch=()=>{
        console.log("clicked")
        setSearched(true)
      }
      
        const {data}:any  =useSearchPostsQuery(search)
        const result:any=data?.postData 
      console.log("search data")
  
    return(
<section className=' flex flex-row w-[100vw]'>
            <input type='text' onChange={(e)=>setSearch(e.target.value)} className=' md:hidden h-12  border-solid text-black border-slate-900 border-2 rounded-lg w-[90vw]' placeholder='Search post by title' />
           <button className='bg-blue-600 w-[20vw]' onClick={handleSearch}>search</button>
           </section>
    )
}