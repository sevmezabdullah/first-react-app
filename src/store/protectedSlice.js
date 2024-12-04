import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}


export const getData = createAsyncThunk("protected/getData", async () => {
    const response = await axios.get("http://localhost:3000/protected", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data
})


const protectedSlice = createSlice({
    name: "protected",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.error = null
            state.isLoading = true
        }).addCase(getData.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = false
            state.data = action.payload
        }).addCase(getData.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
        })
    }
}
)

export default protectedSlice.reducer