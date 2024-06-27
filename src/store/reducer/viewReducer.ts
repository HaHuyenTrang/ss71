import { createSlice } from "@reduxjs/toolkit"

const viewState: string = "list"

const viewReducer = createSlice({
    name: "view",
    initialState: viewState,
    reducers: {
        setViewState: (state) => state === 'list' ? 'grid' : 'list',
    }
})

export const {setViewState} = viewReducer.actions
export default viewReducer.reducer