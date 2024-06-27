import { createSlice } from "@reduxjs/toolkit";

const countReducer=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increase:(state:any)=>{
            state.count+=1
        },
        decrease:(state:any)=>{
            state.count-=1
        }
    }
})
// xuất ra các action bằng cách dùng destructoring
export const {increase,decrease}=countReducer.actions
// xuất ra hàm
export default countReducer.reducer;