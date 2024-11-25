import { createSlice } from "@reduxjs/toolkit";


//reducers : sayfada basit işlerin yapıldığı fonksiyonların tanımlandığı yer.
//extraReducers : sayfada daha karmasık ve asenkron işlerin yapıldıgı fonksiyonların tanımlandıgı yer.
const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload.text,
                isDone: action.payload.isDone
            })

        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    },

})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer