 "use client"
import Image from 'next/image'
import Logo from '../../../public/vercel.svg'
import { usePostQuery } from '@/redux/services/postApi'
export default function PostDetails({params:{id}}:any){
    
    const {data}:any=usePostQuery(id)
    const result=data?.postData
    console.log(result)
    
    return(
        <article className="sm:w-[60vw]  w-[90vw] rounded-2xl p-2 h-[80vh] bg-slate-700 ">
            <div className='bg-slate-600 p-2 flex flex-row gap-x-2 items-center justify-start rounded-t-xl'>
            <Image src={Logo} alt="image check" className=' w-10 h-10 rounded-full bg-slate-200'/>
             <div>{result?.username}</div>
            <div>{result?.title}</div> 
            </div>
        { result?.post && <><div className="bg-slate-400 h-[60%] rounded-b-xl">
           {data && <Image src={result.image||Logo} width={20} height={20} alt="image check"  />}    
        </div>
         <div className='h-[20%] overflow-scroll'>{result.post}</div>
         </>
        }
        
        <div className="bg-slate-400 h-[80%] rounded-b-xl relative">
           {data && <Image src={result.image||Logo} fill={true} alt="image check" style={{objectFit:"cover"}}  />}    
        </div>
        <div className='flex flex-row m-4 gap-x-5'>
        <div className=' w-10 h-10 rounded-full bg-yellow-700 flex justify-center items-center'>like</div>
        <input type='text' placeholder='comment on post' className='w-[80%] h-10  rounded-lg bg-orange-100 text-cyan-400'/>

        </div>
    </article>

    )
}