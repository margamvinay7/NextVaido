import mongoose from 'mongoose'

const postSchema=new mongoose.Schema({
   userId:String,
   title:String,
   post:String,
   createdAt:{
    type:Date,
    default:new Date(),
   },
   image:String,
  

})

const Posts=mongoose.models.vaidoPosts||mongoose.model("vaidoPosts",postSchema)
export default Posts;