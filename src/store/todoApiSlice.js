import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Query ve Mutation :  
// Query : sorgularda kullanılır. Get işlemi içindir.
// Mutation : Veri girişinde kullanılır. Post, put, delete işlemleri içindir.


//Provide Tags ve InvalidateTags : 
//  InvalidateTags provide olan tagleri tetiklemek için kullanılır.


// Interceptor: 
//  Bir istek yapmadan once veya sonrasında bir islem yapmak istersek interceptor kullanılır.

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/todos',

    }),
    tagTypes: ["todos"],

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/',
            providesTags: ["todos"],

        }),
        addTodo: builder.mutation({
            query: (text) => ({
                url: '/',
                method: 'POST',
                body: { text, isCompleted: false }
            }),
            invalidatesTags: ["todos"]
        }),
        toggleTodo: builder.mutation({
            query: (todo) => ({
                url: `/${todo.id}`,
                method: 'PUT',
                body: { ...todo, isCompleted: !todo.isCompleted }
            }),
            invalidatesTags: ["todos"]
        })
    })
})

export const { useAddTodoMutation, useGetTodosQuery, useToggleTodoMutation } = todoApi