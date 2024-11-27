import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:5000/products')
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success"
            state.items = action.payload
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading"
            state.items = []
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "error"
            state.items = []
        })
    }
})




export default productSlice.reducer