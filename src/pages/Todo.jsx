import React, { useState } from 'react'
import { useAddTodoMutation, useGetTodosQuery, useToggleTodoMutation } from '../store/todoApiSlice'

const Todo = () => {

    const { data: todos = [], isLoading, isError, refetch } = useGetTodosQuery()
    const [addTodo, { isLoading: isAddLoading, isError: isAddError }] = useAddTodoMutation()
    const [toggleTodo] = useToggleTodoMutation()

    const [text, setText] = useState("")

    const handleToggleTodo = async (todo) => {
        await toggleTodo(todo)
    }
    const handleAddTodo = async () => {
        await addTodo(text)
    }

    return (
        <div>
            <h1>Yapılacaklar Uygulaması</h1>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Yapılacak notu al" />
                <button onClick={() => {
                    handleAddTodo()
                }}>Ekle</button>
            </div>

            {isLoading && <p>Yükleniyor...</p>}
            {isError && <p>Hata Olustu</p>}

            {todos && todos.map((todo, index) => (<div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <input type="checkbox" onChange={() => {
                    console.info(todo)
                    handleToggleTodo(todo)
                }} checked={todo.isCompleted} />
                <p style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}</p>
            </div>))}



        </div>
    )
}

export default Todo