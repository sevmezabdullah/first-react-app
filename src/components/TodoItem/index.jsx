/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { deleteTodo } from "../../store/todoSlice"


// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, index }) => {

    const dispatch = useDispatch()

    const deleteTask = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <li key={todo.id}><div style={{
            border: '1px solid black', padding: '10px', margin: '10px', justifyContent: 'space-between', display: 'flex',
            width: '200px'
        }}>
            {index + 1 + ' - '}{todo.text}
            <button onClick={deleteTask}>Sil</button>
        </div></li>
    )
}

export default TodoItem