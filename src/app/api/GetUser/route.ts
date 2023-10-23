import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import User from '@/models/user'

connect();

export async function GET(request:NextRequest){
    console.log("entered in getuser id routes",)
    try{
        const UserData=await User.find({});
        
        return NextResponse.json({UserData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}