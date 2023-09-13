import {NextResponse,NextRequest} from 'next/server'
import User from '@/models/user'
import {connect} from '@/dbConfig/dbconfig'

connect()

export async function POST(request:NextRequest){
    console.log("entered profile")
    try{
        const reqBody=await request.json()
        const {userId}=reqBody;
console.log(reqBody)
        const user=await User.findOne({_id:userId})
console.log(user)
        if(!user){
            return NextResponse.json({error:"something wrong"})
        }

        return NextResponse.json({
            user
        });
    }
    catch(err){
        return NextResponse.json({error:err},{status:400})
    }
}