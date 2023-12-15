"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import FileBase from 'react-file-base64'




export default function SignupPage() {
    const router = useRouter();
    
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

    


    return (
       <div className="login  ">
    <div className="loginform gap-2 ">
        <h1 className=" login-header">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        
        <input 
        className=" input-button placeholder-sky-800 "
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername( e.target.value)}
            placeholder="Username"
            />
        
        <input 
        className="input-button placeholder-sky-800"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail( e.target.value)}
            placeholder="Email"
            />
            <label  className="input-button   bg-white  flex items-center justify-center"><span className="text-sky-800">Select File</span>
            <span id="file">
            <FileBase type="file"  multiple={false} onDone={({base64}:any)=>setImage(base64)}/>
            </span>
            </label>
            
        <input 
        className="input-button placeholder-sky-800"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword( e.target.value)}
            placeholder="password"
            />
            
            <button
            onClick={onSignup}
            className="login-button">Submit</button>
            <div className="flex">Already have account ?<Link href="/login" className="text-black flex  justify-center log ">Login</Link></div>
            
        </div>
        </div>
        
    )

}