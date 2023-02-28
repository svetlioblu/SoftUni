
let Button = ({ operator, outputHandler }) => {
    
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