const resultInput = document.getElementById("result")
let operator
let number1
let number2
function addNumber(number) {
    resultInput.value += number
}
function addOperator(symvol) {
    number1 = resultInput.value
    operator = symvol

    
    resultInput.value += symvol
}
function clearInput() {
    resultInput.value = ""
}
function calculate() {
    number2 = resultInput.value.slice(number1.length+1)
    let x = parseInt(number1)
    let y = parseInt(number2)
    let result 
    switch (operator) {
        case "+":
            result = x+y
            break;
    case "-":
        result = x-y
        break
        case "*":
            result = x*y
            break
            case "/":
            result = x/y

        default:
            break;
    }
    resultInput.value = result
}