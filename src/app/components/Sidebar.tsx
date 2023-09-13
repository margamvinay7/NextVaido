"use client"
import {useState} from 'react'
import Link from 'next/link';
export default function Sidebar(){
    const [active,setActive]=useState("");
    const [toggle, setToggle] = useState(false);
    
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
        <div className='flex flex-col w-[20vw]'>

            <div className='flex bg-gradient-to-tr from-green-700 to-lime-400 justify-center text-8xl '>Vaido</div>
  <ul className='list-none mt-5'>
        {navLinks.map((nav) => (
          <Link href={`${nav?.link}`}>
                <li
                  key={nav.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px] hover:bg-purple-500/70 list-none rounded-lg p-2 flex justify-center m-2 bg-cyan-800   ${
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