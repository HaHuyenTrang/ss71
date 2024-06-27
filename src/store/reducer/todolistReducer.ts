import { createSlice } from "@reduxjs/toolkit";

const todolistReducer=createSlice({
    name:"todolistReducer",
    initialState:{
        jobs:[
            {
                id:1,
                name:"học lập trình",
            },
            {
                id:2,
                name:"quét nhà",
            },
            {
                id:3,
                name:"nấu cơm",
            }
        ]
    },
    reducers:{
        addTodo:(state:any,action:any)=>{
            state.jobs.push(action.payload);
        },
        deleteJob:(state,action)=>{
         state.jobs=   state.jobs.filter((item:any)=>{
            return item.id!==action.payload;
            });
        },
        updateJob:(state,action)=>{
            let index =state.jobs.findIndex((item:any)=>item.id===action.payload.id);
            state.jobs.splice(index,1,action.payload)
        },
    }
});
export const {addTodo, deleteJob, updateJob} = todolistReducer.actions
export default todolistReducer.reducer;