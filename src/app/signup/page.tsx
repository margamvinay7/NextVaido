"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import FileBase from 'react-file-base64'




export default function SignupPage() {
    const router = useRouter();
    // const [image, setImage] = React.useState("");
    // const [user, setUser] = React.useState({
    //     email: "",
    //     password: "",
    //     username: "",
    //    image
    // })
    // console.log(image)
    const [email, setEmail] = React.useState("");
    const [image, setImage] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");

    const user={
        email:email,
        password:password,
        username:username,
        image:image,
    }
    console.log(user)
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
    //         setButtonDisabled(false);
    //     } else {
    //         setButtonDisabled(true);
    //     }
    // }, [email,image,username,password]);


    return (
       <div className="login">
    <div className="flex flex-col  items-center justify-center h-[70vh] py-2 bg-slate-900 sm:w-[50vw]  w-[90vw] rounded-xl gap-1">
        <h1 className="text-white">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        
        <input 
        className="p-2 border text-center border-gray-300 rounded-lg mb-4 placeholder-slate-950 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername( e.target.value)}
            placeholder="username"
            />
        
        <input 
        className="p-2 border text-center placeholder-slate-950 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail( e.target.value)}
            placeholder="email"
            />
          <div className="w-[80%]">  
            <FileBase type="file" multiple={false} onDone={({base64}:any)=>setImage(base64)}/>
            </div>
        <input 
        className="p-2 border text-center placeholder-slate-950 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword( e.target.value)}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none  focus:border-gray-600 text-white">SignUp</button>
            <Link href="/login" className="text-white">Visit login page</Link>
            <Link href="/profile" className="text-white">Visit profile page</Link>
        </div>
        </div>
        
    )

}