import {connect} from '@/dbConfig/dbconfig'
import User from '@/models/user'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export  async function GET(request:NextRequest){
    console.log("entered logout")
    try{
        
        const response=NextResponse.json({
            message:'Logout successful',
            success:true,

        })
        response.cookies.set("token","",{
            httpOnly:true,
        })
        
        return response;
    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}