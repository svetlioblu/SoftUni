import styles from './Todo.module.css'
const Todo = ({ _id, text, isCompleted, toggleStatus, setTodos, todos }) => {
    function delHandler(id) {
        fetch('http://localhost:3030/jsonstore/todos/' + id, {
            method: 'DELETE'
        })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (
        <tr className={`todo ${(isCompleted ? 'is-completed' : '')}`.trim()} >
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'No-Completed'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => { toggleStatus(_id) }}>Change status</button>
                <button className={styles['todo-btn']} onClick={() => { delHandler(_id) }}>Del</button>

            </td>
        </tr>
    );

}
export default Todo