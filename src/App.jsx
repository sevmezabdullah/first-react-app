import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, fetchTodos, toggleTodo } from "./store/todoSlice"
import Todo from "./pages/Todo"


function App() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.items)
  const status = useSelector(state => state.todos.status)

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo(todo))
  }

  const handleAddTodo = () => {
    dispatch(addTodo(text))
  }
  const [text, setText] = useState("")


  useEffect(() => {
    dispatch(fetchTodos())

  }, [dispatch])


  return (
    <>
      {/*       <div>
        <h1>Yapılacaklar Uygulaması</h1>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Yapılacak notu al" />
          <button onClick={() => {
            handleAddTodo()
          }}>Ekle</button>
        </div>

        {status === "loading" && <p>Yükleniyor...</p>}
        {status === "failed" && <p>Yüklenemedi</p>}
        {status === "success" && todos.map((todo, index) => (<div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <input type="checkbox" onChange={() => {
            handleToggleTodo(todo)
          }} checked={todo.isCompleted} />
          <p style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}</p>
        </div>))}



      </div> */}

      <Todo />




    </>
  )
}

export default App
