import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from '../../store/todoSlice'

const TodoForm = () => {

    const [text, setText] = useState("")

    // okuma : useSelector
    // yazma : useDispatch
    const dispatch = useDispatch()



    const addTask = () => {
        dispatch(addTodo({ text, isDone: false }))
        setText("")
    }


    return (
        <div>
            <h1>Yapılacak Ekle</h1>
            <input value={text} onChange={(e) => {
                setText(e.target.value)
            }} type="text" name="todo" id="todo" />
            <button onClick={addTask}>Ekle</button>
        </div>
    )
}

export default TodoForm