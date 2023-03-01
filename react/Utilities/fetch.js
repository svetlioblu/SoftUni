import { useState, useEffect } from 'react'

function App() {
  let [demoData, setDemoData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/remoteData.json')
      .then(res => res.json())
      .then(data => setDemoData(data.widget))
  }, [])
  console.log(demoData.debug);
  return (
    <div>
      <p>{demoData.debug}</p>
    </div>
  );
}