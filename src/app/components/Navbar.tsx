"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import Menu from '../../../public/menu.svg'
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
        <nav className="flex md:hidden  flex-col gap-2 h-14   sticky  top-0 z-10 bg-red-500 " >
         <div className='flex w-full p-2  flex-row justify-end items-center'>
            <div className=" text-2xl">Vaido</div>
          <div
           className='pe-5  object-contain flex flex-1 justify-end cursor-pointer items-center'
           onClick={() => setToggle(!toggle)}
           >
            {/* <img
     className=' ps-2  '
     src={""}
     /> */} <Image src={Menu} alt="menu" width={30} height={30}/>
           </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  absolute top-[55px] p-6 py-2  my-1 min-w-[120px] z-10  rounded-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px] hover:bg-purple-500 rounded-lg p-2 ${
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