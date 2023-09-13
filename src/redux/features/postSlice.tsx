import {createSlice} from '@reduxjs/toolkit'
const post:any={}
const postSlice=createSlice({
    name:'post',
    initialState:{post},
    reducers:{
        updatePost:(state,action)=>{
            console.log("entered slice",action)
            console.log(action.payload)
            state.post=action.payload;
            return 
            
        },
    }
})

export const postActions=postSlice.actions;
export default postSlice