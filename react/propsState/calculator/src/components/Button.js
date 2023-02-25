
let Button = (props) => {
    //let operators = ['+', '-', 'x', '÷', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'AC', '=']
    let addClass = () => {
        if (props.operator === '+' || props.operator === '-' || props.operator === '÷' || props.operator === 'x') {
            return ' calculator__key--operator'
        } else if (props.operator === '=') {
            return ' calculator__key--enter'
        } else {
            return ''
        }
    }
    return (
        <button className={'calculator__key' + addClass()} >{props.operator}</button>
    );
}
export default Button