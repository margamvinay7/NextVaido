"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { postActions } from "@/redux/features/postSlice";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const dispatch=useDispatch();
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            const resData=response.data.tokenData
            console.log("Login success", resData);
            localStorage.setItem("userId",resData.id)
            console.log("before user data set")
            dispatch(postActions.userId(resData.id))
           
            localStorage.setItem("username",resData.username)

            toast.success("Login  toast success");
            router.push("/posts");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="login">
    <div className="flex flex-col outline outline-white items-center justify-center bg-slate-900 h-[60vh] sm:w-[50vw] py-2 rounded-xl w-[90vw]">
        <h1 className="text-white mb-2">{loading ? "Processing" : "Login"}</h1>
        <hr />
        
         
        <input 
        className="p-2 border border-gray-300 rounded-lg text-center placeholder-black mb-4 focus:outline-none placeholder- focus:border-gray-600 text-black "
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
       
        <input 
        className="p-2 border placeholder-black text-center border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white">Login here</button>
            <Link href="/signup" className="text-white">Visit Signup page</Link>
        </div>
        </div>
    )

}