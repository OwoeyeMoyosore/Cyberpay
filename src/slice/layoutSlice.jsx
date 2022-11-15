import { createSlice } from "@reduxjs/toolkit";
import React from "react";

 const initialState ={
    title:"Welcome"
}

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers:{
        setTitle: (state, action)=>{
            console.log(action.payload);
            state.title = action.payload.title
        }
    }

})
export const {setTitle} = layoutSlice.actions
export default layoutSlice.reducer