import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        Adding(state,action){
            state.push(action.payload)
        },
    }
})

export const { Adding,removing}=todoSlice.actions;
export default todoSlice.reducer;