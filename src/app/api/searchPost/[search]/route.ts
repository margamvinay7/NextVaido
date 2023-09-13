import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function GET(request:NextRequest,{params:{search}}:any){
    console.log("entered in get search routes",search)
    try{
        const title=new RegExp(search,"i");
        const postData=await Posts.find({title});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}