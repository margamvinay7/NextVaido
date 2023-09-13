import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/user'
import {connect} from '@/dbConfig/dbconfig'

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:"84128395589-u2041ki71h00m725iq43a5om4cqogig2.apps.googleusercontent.com" ,
            clientSecret:"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"
        })
    ],
    callbacks:{
        async session({session}:any){
            await connect();
            const sessionUser=await User.findOne({email:session.user.email});
            session.user.id=sessionUser._id.toString();
            return session;
        },
        async signIn({account,profile}:any){
            try{
              

                const userExists=await User.findOne({email:profile.email});

                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username:profile.name,
                        image:profile.picture,
                    })
                }
                return true
            }catch(error:any){
                console.log("error checking if user exists: ",error.message)
                return false
            }

        }

    }
})

export {handler as GET,handler as POST}


