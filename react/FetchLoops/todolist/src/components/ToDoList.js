import Todo from "./Todo";

import { useState } from 'react'

const ToDoList = ({ todos, setTodos }) => {
    let [isCompletedStatus, setIscompleatedStatus] = useState([])
    // console.log(isCompletedStatus)

    const toggleStatus = (id) => {
        setTodos(state => state.map(c => c.id === id ? ({ ...c, isCompleted: !c.isCompleted }) : c))

    }
    return (
        <tbody>
            {todos.map(todo => <Todo key={todo.id} {...todo} toggleStatus={toggleStatus} />)}
        </tbody>
    );
}

export default ToDoList