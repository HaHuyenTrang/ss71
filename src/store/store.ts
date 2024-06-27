import countReducer from "./reducer/countReducer";
import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./reducer/todolistReducer";
const store = configureStore({
    reducer:{
        countReducer,
        todolistReducer
    }
})
export default store;