import Button from "./components/Button";
import { useState } from "react"

function App() {
  let [result, setResult] = useState('0')
  function outputHandler(e) {
    let input = e.target.innerHTML
    switch (input) {
      case '+':
        
        break;
      default:

    }
    setResult(state => state + input)
  }
  return (
    <div className="calculator">
      <div className="calculator__output">{result}</div>
      <div className="calculator__keys">
        <Button operator='+' outputHandler={outputHandler} />
        <Button operator='-' outputHandler={outputHandler} />
        <Button operator='x' outputHandler={outputHandler} />
        <Button operator='÷' outputHandler={outputHandler} />
        <Button operator='7' outputHandler={outputHandler} />
        <Button operator='8' outputHandler={outputHandler} />
        <Button operator='9' outputHandler={outputHandler} />
        <Button operator='4' outputHandler={outputHandler} />
        <Button operator='5' outputHandler={outputHandler} />
        <Button operator='6' outputHandler={outputHandler} />
        <Button operator='1' outputHandler={outputHandler} />
        <Button operator='2' outputHandler={outputHandler} />
        <Button operator='3' outputHandler={outputHandler} />
        <Button operator='0' outputHandler={outputHandler} />
        <Button operator='.' outputHandler={outputHandler} />
        <Button operator='AC' outputHandler={outputHandler} />
        <Button operator='=' outputHandler={outputHandler} />
      </div>
    </div>

  );
}

export default App;
