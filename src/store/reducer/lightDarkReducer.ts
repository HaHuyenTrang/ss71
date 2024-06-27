import { createSlice } from "@reduxjs/toolkit";

const initialLight: string = "white";

const lightDarkReducer = createSlice({
    name: "lightDark",
    initialState: initialLight,
    reducers: {
        toggleLightDark: (state) => (state === "white" ? "dark" : "white"),
    }
})

export const {toggleLightDark} = lightDarkReducer.actions
export default lightDarkReducer.reducer