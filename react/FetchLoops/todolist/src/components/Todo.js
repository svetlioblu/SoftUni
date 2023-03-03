const Todo = ({ id, text, isCompleted, toggleStatus }) => {
    return (
        <tr className={`todo ${(isCompleted ? 'is-completed' : '')}`.trim()} >
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'No-Completed'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => { toggleStatus(id) }}>Change status</button>
            </td>
        </tr>
    );
}
export default Todo