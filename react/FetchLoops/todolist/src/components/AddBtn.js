import styles from './AddBtn.module.css'

const AddBtn = ({ todos, setTodos }) => {

    function addTodoHAndler() {
        let taskText = prompt('Add your task')

        fetch('http://localhost:3030/jsonstore/todos', {
            method: 'POST',
            body: JSON.stringify({
                text: taskText,
                isCompleted: false
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(row => setTodos([...todos, row]))
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (

        <div className="add-btn-container">
            <button className={styles.btn} onClick={() => (addTodoHAndler())}>+ Add new Todo</button>
        </div>
    );
}
export default AddBtn