import { useState, useEffect } from 'react'

// Example 1
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

// Example 2
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