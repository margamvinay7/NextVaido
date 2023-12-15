"use client";
import Link from "next/link";
import React, {useEffect} from "react";

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
            
       
        <div className="login ">
    <div className="loginform">
        <div className="login-header">Logout</div>
        
        
        
            <button
            onClick={onLogOut}
            className="log">Logout</button>
            
        </div>
        </div>
        </>
    )

}