import Button from "./components/Button";
import { useState } from "react"

function App() {
  let operators = ['+', '-', 'x', '÷', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'AC', '=']
  let [result, setResult] = useState('0')
  function outputHandler(e) {
    let input = e.target.innerHTML
    switch (input) {
      case '+':
      case '-':
      case 'x':
      case '÷':
        let checkIfExists = result.search(/[+\-x÷']/g)
        if (checkIfExists !== -1) { input = '' }
        break;
      case '7':
      case '8':
      case '9':
      case '4':
      case '5':
      case '6':
      case '2':
      case '1':
      case '3':
      case '0':
        if (result.length === 1 && result[0] === '0') { setResult('') }
        break;
      case 'AC':
        setResult('0')
        input=''
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
