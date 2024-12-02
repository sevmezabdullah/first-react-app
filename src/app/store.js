import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../store/todoSlice'
import { todoApi } from '../store/todoApiSlice'

const store = configureStore({
    reducer: {
        todos: todoSlice,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware)
})



export default store