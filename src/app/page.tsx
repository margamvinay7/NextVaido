"use client"
import SignupPage from "./signup/page"
import Posts from "./posts/page";
import { useState } from "react";

const page = () => {
  const [authenticate,setAuthenticated]=useState("")
  return (
    <>
    { authenticate? <SignupPage/> : <Posts/>}
    </>
  )
}

export default page