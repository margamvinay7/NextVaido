import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function GET(){
    console.log("entered in get search routes")
    try{
        
        
        const postData=await Posts.find();
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}