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
    <div className="loginform gap-2 ">
        <h1 className="login-header">{loading ? "Processing" : "Login"}</h1>
        <hr />
        
         
        <input 
        className="input-button placeholder-sky-800 "
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Email"
            />
       
        <input 
        className="input-button placeholder-sky-800 "
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="login-button">Login </button>
            <div className="flex">Create Account ?<Link href="/signup" className="text-black flex  justify-center log ">Sign Up</Link></div>
        </div>
        </div>
    )

}