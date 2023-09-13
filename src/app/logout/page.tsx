"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import Sidebar from "../components/Sidebar";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function Logout() {
    const router = useRouter();
    
       
   
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogOut = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/users/logout");
            console.log("Logout success", response.data);
            toast.success("Logout toast success");
            router.push("/login");
        } catch (error:any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    return (
        <>
            <aside key={1} className="md:w-[20vw] sm:hidden hidden md:flex  left-0 bg-slate-300 h-[100vh] fixed"><Sidebar/></aside>  
       
        <div className="login">
    <div className="flex flex-col  items-center justify-center bg-slate-900 h-[60vh] w-[50vw] py-2 rounded-xl">
        <div>Logout</div>
        
        
        
            <button
            onClick={onLogOut}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Logout here</button>
            
        </div>
        </div>
        </>
    )

}