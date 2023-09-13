import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function POST(request:NextRequest) {
    console.log("entered in posts routes post method")
    try{
    const reqBody=await request.json();
    const {userId,title,post,image}=reqBody

    console.log(reqBody)
    const postData=await Posts.create({userId,title,post,image});
    return NextResponse.json(postData)
}
catch(err){
    console.log(err)
    return NextResponse.json({error:err});
}

}

export async function GET(request:NextRequest){
    console.log("entered in get routes")
    try{
        const postData=await Posts.find().sort({_id:-1});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}


