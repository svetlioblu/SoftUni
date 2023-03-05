import Todo from "./Todo";

const ToDoList = ({ todos, setTodos }) => {

    const toggleStatus = (id) => {
        setTodos(state => state.map(c => c.id === id ? ({ ...c, isCompleted: !c.isCompleted }) : c))

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
                {todos.map(todo => <Todo key={todo._id} {...todo} toggleStatus={toggleStatus} setTodos={setTodos} todos />)}
            </tbody>
        </table>
    );
}

export default ToDoList