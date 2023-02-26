
let Button = ({ operator, outputHandler }) => {
    //let operators = ['+', '-', 'x', '÷', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'AC', '=']
    let addClass = () => {
        if (operator === '+' || operator === '-' || operator === '÷' || operator === 'x') {
            return ' calculator__key--operator'
        } else if (operator === '=') {
            return ' calculator__key--enter'
        } else {
            return ''
        }

    }
    return (
        <button className={'calculator__key' + addClass()} onClick={(e) => outputHandler(e)}>{operator}</button>
    );
}
export default Button