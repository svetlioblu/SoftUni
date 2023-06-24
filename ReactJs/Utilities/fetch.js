import { useState, useEffect } from 'react'

//GET Example  1
function App() {
  let [demoData, setDemoData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/remoteData.json')
      .then(res => res.json())
      .then(data => setDemoData(data.widget))
      .catch(err => console.log(`Error ${err}`))
  }, [])


  return (
    <div>
      <p>{demoData.debug}</p>
    </div>
  );
}

//GET Example 2
let [todos, setTodos] = useState([])
useEffect(() => {
  fetch('http://localhost:3030/jsonstore/todos')
    .then(res => res.json())
    .then(data => {
      let result = Object.keys(data).map(id => ({ id, ...data[id] })) //modular inputed data to Array
      setTodos(result)
    })
    .catch(err => console.log(`Error ${err}`))
}, []);

//POST Ex 1
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
  .then(row => setTodos([...todos, row])) //adding the new record to the existing state.Watch the format!
  .catch((err) => {
    console.log(err.message)
  })
  
  // DEL Ex 1
  function delHandler(id) {
    fetch('http://localhost:3030/jsonstore/todos/' + id, {
        method: 'DELETE'
    })
        .catch((err) => {
            console.log(err.message)
        })

}

// Service Component
const baseUrl = 'http://localhost:3005/api/users'

const getAll = async () => {
    const response = await fetch(baseUrl)
    const result = await response.json()

    return result.users
}

export { getAll }
//++ app js
const [users, setUsers] = useState()
  useEffect(() => {
    userService.getAll()
      .then(setUsers)
      .catch(err => console.log(err))
  }, [])
  
//take one user
  const getOne = async (id) => {
    const response = await fetch(baseUrl + id)
    const result = await response.json()

    return result.user
}