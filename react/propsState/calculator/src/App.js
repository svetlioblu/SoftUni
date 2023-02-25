import Button from "./components/Button";

function App() {
 function Sum() {
  console.log('ok');
 }
  return (
    <div className="calculator">
      <div className="calculator__output">0</div>
      <div className="calculator__keys">
        <Button operator='+'/>
        <Button operator='-' />
        <Button operator='x' />
        <Button operator='÷' />
        <Button operator='7' />
        <Button operator='8' />
        <Button operator='9' />
        <Button operator='4' />
        <Button operator='5' />
        <Button operator='6' />
        <Button operator='1' />
        <Button operator='2' />
        <Button operator='3' />
        <Button operator='0' />
        <Button operator='.' />
        <Button operator='AC' />
        <Button operator='=' />
      </div>
    </div>
  );
}

export default App;
