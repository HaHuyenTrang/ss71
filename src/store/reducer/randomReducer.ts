import { createSlice } from "@reduxjs/toolkit"

const randomNumber: number[] = []

const randomReducer = createSlice({
    name: "random",
    initialState: randomNumber,
    reducers: {
        generateNewRandom: (state) => {
            return [...state, Math.floor(Math.random() * 100)]
        }
    }
})

export const {generateNewRandom} = randomReducer.actions
export default randomReducer.reducer

