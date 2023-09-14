import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function GET({params:{id}}:any){
    console.log("entered in get search routes",id)
    try{
        await id
        const title=new RegExp(id,"i");
        const postData=await Posts.find({title});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}