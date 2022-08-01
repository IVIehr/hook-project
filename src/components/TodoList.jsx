import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        // Ignore the free text
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
    }
    return (
        <>
            <h1>Whats the plan for today?</h1>
            <TodoForm/>
        </>
  )
}

export default TodoList