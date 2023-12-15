"use client"
import Image from 'next/image'
import Logo from '@/public/profile.svg'
import { usePostQuery,useDeletePostMutation } from '@/redux/services/postApi'
import {useRouter} from 'next/navigation'
import UpdatePost from '../UpdatePost/page'
import { useDispatch } from 'react-redux'
import { postActions } from '@/redux/features/postSlice'
import Delete from '@/public/delete1.jpg'
import {  FaTrashCan,FaPenToSquare,FaThumbsUp} from "react-icons/fa6";
import Edit from '@/public/edit.jpg'

export default function Post({post}:any){
    const [deletePost]=useDeletePostMutation();
    const router=useRouter()
   
    const result=post

    const created=result?.createdAt?.split('T')
    
    const createdAtDate=created?.[0]
    const dispatch=useDispatch();

    const handleDelete=async(id:any)=>{
        console.log("handleDelete",id)
         const result=   await deletePost(id);
         
        
    }
    const handleEdit=async(result:any)=>{
         dispatch(postActions.updatePost(result));

       router.push('/UpdatePost')
        
       
       

    }
    
    return(
        <div className="sm:w-[60vw] md:w-[40vw]  w-[100vw] rounded-lg p-2 h-[80vh] bg-[#23292f]">
            <div className='  p-2 flex flex-row gap-x-2 items-center justify-start rounded-t-xl relative'>
            <Image src={Logo|| " "} alt="image check" className=' w-10 h-10 rounded-full bg-slate-200'/>
             <div>{result?.username}</div>
            <div>{result?.title}</div> 
            <div>{createdAtDate}</div>
            <div className='w-10 rounded-full h-10 flex items-center justify-center hover:bg-slate-400   absolute right-16 cursor-pointer' onClick={()=>handleEdit(post)}  >< FaPenToSquare /></div>
            <div className='w-10 rounded-full h-10 flex items-center justify-center hover:bg-slate-400  absolute right-5 cursor-pointer' onClick={()=>handleDelete(result._id)}  ><FaTrashCan/></div>
            
            </div>
            
            <hr/>
        { result?.post && <>
         <div className='h-[10%] overflow-auto  ps-1 rounded-sm outline-4'><div className=' text-justify'>{result.post}</div></div>
         
        <div className=" h-[72%]  relative">
         
           {result?.image && <Image src={result?.image || Logo} fill={true} alt="image check" style={{objectFit:"cover"}}  />}  
        </div>
         </>
        }
        
        {!result?.post && <div className="bg-slate-400 my-2 h-[80%] rounded-b-xl relative">
             <Image src={result?.image||Logo} fill={true} alt="image check" style={{objectFit:"contain"}}  />   
        </div>}

        <hr/>
        <div className='flex flex-row mt-2 gap-x-5 bg-white relative'>
        <div className='w-10 rounded-full h-10 flex items-center  left-2 justify-center hover:bg-slate-400  absolute right-5 cursor-pointer'  ><FaThumbsUp/></div>
        <input type='text' placeholder='comment on post' className='w-[80%] h-10 absolute left-16 text-center rounded-lg bg-orange-100 text-black'/>

        </div>
    </div>

    )
}