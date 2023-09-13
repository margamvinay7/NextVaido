import {connect} from '@/dbConfig/dbconfig'
import User from '@/models/user'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export  async function POST(request:NextRequest){
    console.log("entered login")
    try{
        const reqBody=await request.json()
        const {email,password}=reqBody
        console.log(reqBody)

        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"user does not exist"},{status:400})
        }
        console.log("user exists");
        
        const validPassword=await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"Invalid password"},{status:400})

        }
        console.log(user);

        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }
const Token_SECRET="ueywyt29383ujfhj@9ririeui74987h5hkfkji784kjkr"
        const token= jwt.sign(tokenData,Token_SECRET,{expiresIn:'1d'})

        const response=NextResponse.json({
            message:'Login successful',
            success:true,
            tokenData

        })
        response.cookies.set("token",token,{
            httpOnly:true,
        })
        
        return response;
    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}