import { useState, useEffect } from 'react'
import AddBtn from './components/AddBtn';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import ToDoList from './components/ToDoList';

function App() {
  let [todos, setTodos] = useState([])
  let [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        let result = Object.keys(data).map(_id => ({ _id, ...data[_id] }))
        setTodos(result)
        setIsloading(state => state = false)
      })
      .catch(err => console.log(`Error ${err}`))
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <AddBtn todos={todos} setTodos={setTodos} />
          <div className="table-wrapper">
            {isLoading ? <Loading /> : <ToDoList todos={todos} setTodos={setTodos} />}
          </div>
        </section>
      </main>
      <Footer />
    </>


  );
}

export default App;
