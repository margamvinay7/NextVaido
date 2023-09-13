import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function GET(request:NextRequest,{params:{id}}:any){
    console.log("entered in get id routes",id)
    try{
        const postData=await Posts.find({title:id});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}