import {createSlice} from '@reduxjs/toolkit'
const post:any={}
const id:string=""
const postSlice=createSlice({
    name:'post',
    initialState:{post,id},
    reducers:{
        updatePost:(state,action)=>{
            console.log("entered slice",action)
            console.log(action.payload)
            state.post=action.payload;
            return 
            
        },
        userId:(state,action)=>{
            console.log("entered slice",action)
            console.log(action.payload)
            state.id=action.payload;
            return 
            
        },
    }
})

export const postActions=postSlice.actions;
export default postSlice