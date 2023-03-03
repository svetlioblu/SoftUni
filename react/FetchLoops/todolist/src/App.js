import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import ToDoList from './components/ToDoList';

function App() {
  let [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        let result = Object.keys(data).map(id => ({ id, ...data[id] }))
        setTodos(result)
      })
      .catch(err => console.log(`Error ${err}`))
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <Loading /> */}
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header-task">Task</th>
                  <th className="table-header-status">Status</th>
                  <th className="table-header-action">Action</th>
                </tr>
              </thead>
              <ToDoList todos={todos} setTodos={setTodos} />
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>


  );
}

export default App;
