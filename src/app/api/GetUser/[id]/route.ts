import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import User from '@/models/user'

connect();

export async function GET(request:NextRequest,{params:{id}}:any){
    console.log("entered in getuser id routes",id)
    try{
        const UserData=await User.find({_id:id});
        console.log("its a user data",UserData)
        return NextResponse.json({UserData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}