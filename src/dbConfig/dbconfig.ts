import mongoose from 'mongoose'

export async function connect(){

    try{
        mongoose.connect("mongodb+srv://margamvinay:vinay756@vinay.tch0oea.mongodb.net/?retryWrites=true&w=majority",{
            dbName:"vaido"
        });
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log('database connected');
        })

        connection.on('error',(err)=>{
            console.log('mongoDB connection error.please make sure'+err);
            
        })
    }
    catch(err){
        console.log('Something goes wrong!');
        console.log(err);
    }
}

