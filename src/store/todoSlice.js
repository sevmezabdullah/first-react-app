import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/todos";



//Todoları listelemek için fonksiyon
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get(API_URL);
    return response.data
})

// Yeni bir todo eklemek için fonksiyon
export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
    const newTodo = { text, isCompleted: false }
    const response = await axios.post(API_URL, newTodo);
    return response.data
})


// Todo durumunu değiştirmek için fonksiyon
export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {

    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted }

    const response = await axios.put(`${API_URL}/${todo.id}`, updatedTodo);
    return response.data

})


const todoSlice = createSlice({
    name: "todos",
    initialState: { items: [], status: "idle" },

    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.items.push(action.payload)
            state.status = "success"
        })

        builder.addCase(toggleTodo.fulfilled, (state, action) => {
            const index = state.items.findIndex((todo) => todo.id === action.payload.id);
            state.items[index] = action.payload
            state.status = "success"
        })

        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = "failed"
        })

        builder.addCase(addTodo.rejected, (state, action) => {
            state.status = "failed"
        })

        builder.addCase(toggleTodo.rejected, (state, action) => {
            state.status = "failed"
        })

        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = "loading"
        })

        builder.addCase(addTodo.pending, (state, action) => {
            state.status = "loading"
        })

        builder.addCase(toggleTodo.pending, (state, action) => {
            state.status = "loading"
        })
    }
})


export default todoSlice.reducer


