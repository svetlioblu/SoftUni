import Button from "./components/Button";
import { useState } from "react"

function App() {
  let operators = ['+', '-', 'x', '÷', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'AC', '=']
  let [result, setResult] = useState('0')
  function outputHandler(e) {
    let input = e.target.innerHTML
    switch (input) {
      case '+':
        let checkIfExists = result.search(/\+/g)
        if (checkIfExists != -1) { input = '' }
        break;
      default:
    }

    setResult(state => state + input)
  }
  return (
    <div className="calculator">
      <div className="calculator__output">{result}</div>
      <div className="calculator__keys">
        {operators.map(btn => <Button key={btn} operator={btn} outputHandler={outputHandler} />)}
      </div>
    </div>

  );
}
export default App;
