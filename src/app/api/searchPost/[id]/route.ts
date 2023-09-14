import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();



export async function GET(request:NextRequest,{params:{id}}:any){
    console.log("entered in get id  search routes",id)
    try{
         const title= new RegExp(id,"i")
        const postData=await Posts.find({title}).sort({_id:-1})
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}