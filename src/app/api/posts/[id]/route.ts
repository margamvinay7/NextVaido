import {connect} from '@/dbConfig/dbconfig';
import { NextRequest,NextResponse } from 'next/server';
import Posts from '@/models/posts'

connect();

export async function GET(request:NextRequest,{params:{id}}:any){
    console.log("entered in get id routes",id)
    try{
        const postData=await Posts.find({userId:id});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})
    }
}

export async function PUT(request:NextRequest,{params:{id}}:any){
    console.log("entered in get routes")
    try{
        const reqBody=await request.json();
        const {userId,title,post,image}=reqBody;

        const postData=await Posts.findByIdAndUpdate(id,{userId,title,post,image},{new:true});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered");
        return NextResponse.json({error:err},{status:400})

    }

}

export async function DELETE(request:NextRequest,{params:{id}}:any){
    console.log("entered in delete routes",id)

    try{
        

        const postData=await Posts.findByIdAndDelete({_id:id});
        return NextResponse.json({postData});
    }
    catch(err){
        console.log("entered error ",err);
        return NextResponse.json({error:err},{status:400})
    }
}