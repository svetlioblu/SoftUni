import Todo from "./Todo";

const ToDoList = ({ todos, setTodos }) => {

    const toggleStatus = (id) => {
        setTodos(state => state.map(c => c.id === id ? ({ ...c, isCompleted: !c.isCompleted }) : c))
    }
    function delHandler(id) {
        fetch('http://localhost:3030/jsonstore/todos/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                setTodos(state => state.filter(x => (x._id !== res._id)))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => <Todo key={todo._id} {...todo} toggleStatus={toggleStatus} delHandler={delHandler} />)}
            </tbody>
        </table>
    );
}

export default ToDoList