"use client"
import { useState } from "react";
import Link from "next/link"

import  Image  from "next/image";
import Menu from '@/public/menu.svg'

export  default function Navbar(){
    const [active,setActive]=useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled,setScrolled]=useState(false);
    const navLinks=[
      { name:"Home",
        link:'/posts'

        },
      { name:"profile",
        link:'/profile/id'

        },
        { name:"createPost",
        link:'/CreatePost'

        },

        {name:"logout",
        link:"/logout"
    }
    ]
    return(
        <nav className="flex   flex-col gap-2 h-14 sticky  w-full top-0 z-10 bg-[#23292f] " >
         <div className='flex w-full p-2   flex-row justify-between md:justify-around items-center'>
            <div className=" text-4xl bg-[#0077b5] p-2 rounded-sm w-[40px] h-[40px] flex items-center  justify-center">V</div>
            <div className="px-5 sm:block hidden ">
           <Link href="/CreatePost" className="px-2 hover:bg-[#465768] w-auto h-auto p-2 rounded-sm" >Create Post</Link>
          
           <Link href="/profile/id" className="px-2  hover:bg-[#465768] w-auto h-auto p-2 rounded-sm">Profile</Link>
           <Link href="/logout" className="px-2 hover:bg-[#465768] w-auto h-auto p-2 rounded-sm">Logout</Link>
           </div>
          <div

           className='pe-5 sm:hidden  object-contain flex flex-1 justify-end cursor-pointer items-center  '
           onClick={() => setToggle(!toggle)}
           >
             <Image src={Menu} alt="menu" width={30} height={30}/>
           </div>
           

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  absolute top-[55px] p-6 py-2  my-1 min-w-[120px] z-10  rounded-xl  bg-[#23292f]   `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px] hover:bg-[#4d5c6ac9] rounded-lg p-2 ${
                    active === nav.name ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.name);
                  }}
                >
                  <Link href={`${nav.link}`}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
    </nav>  
)
}