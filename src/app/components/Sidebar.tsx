"use client"
import {useState} from 'react'
import Link from 'next/link';
export default function Sidebar(){
    const [active,setActive]=useState("");
    const [toggle, setToggle] = useState(false);
    
    const navLinks=[
        { name:"Home",
        link:'/posts',
        id:1

        },
        { name:"profile",
          link:'/profile/id',
          id:2
  
          },
          { name:"createPost",
          link:'/CreatePost',

          id:3
  
          },
  
          {name:"logout",
          link:"/logout",
          id:4
      }
      ]

    return(
        <div className='flex flex-col w-[20vw] bg-black'>

            <div className='flex bg-black justify-center text-8xl '>Vaido</div>
  <ul className='list-none mt-5'>
        {navLinks.map((nav) => (
          <Link href={`${nav?.link}`} key={nav.id}>
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  list-none rounded-lg p-2 flex justify-center m-2 outline outline-white outline-1 hover:bg-zinc-700 ${
                    active === nav.name ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.name);
                  }}
                >
                  {nav?.name}
                </li>
                </Link>
               
              ))}
            </ul>   
              </div>
    )
}