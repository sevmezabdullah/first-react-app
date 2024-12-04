import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = "http://localhost:3000"

const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    message: null,
    role: null
}



export const login = createAsyncThunk("auth/login", async ({ username, password }) => {

    const response = await axios.post(`${API_URL}/login`, { username, password })

    return response.data
})


export const register = createAsyncThunk("auth/register", async ({ username, password }) => {
    const response = await axios.post(`${API_URL}/register`, { username, password })
    return response.data
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.error = null
            state.isLoading = true
            state.isAuthenticated = false
            state.token = null
        }).addCase(login.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = false
            state.isAuthenticated = true
            state.token = action.payload.token
            state.role = action.payload.role
            localStorage.setItem("token", action.payload.token)
        }).addCase(login.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
            state.isAuthenticated = false
        })


        builder.addCase(register.pending, (state) => {
            state.error = null
            state.isLoading = true
            state.isAuthenticated = false
            state.token = null
        }).addCase(register.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = false
            state.isAuthenticated = false
            state.message = action.payload.message
        }).addCase(register.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
            state.isAuthenticated = false
        })


    }
})


export default authSlice.reducer