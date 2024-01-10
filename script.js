let firstNum, secondNum, operator;

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, func) {
    switch(func) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            break
    }
}

const numericContainer = document.getElementById('numeric-container')

const createNumericButtons = () => {
    for(let i = 0; i < 10; i++) {
        let button = document.createElement('button')
        button.id = `${i}`
        button.textContent = `${i}`
        // button.click()
        numericContainer.appendChild(button)
    }
}

const operators = ["+", "-", "÷", "x"]
const operatorContainer = document.getElementById('operator-container')

const createOperatorButtons = () => {
    for(let symbol of operators) {
        let button = document.createElement('button')
        button.id = `${symbol}`
        button.textContent = `${symbol}`
        operatorContainer.appendChild(button)
    }
}


document.body.addEventListener("load", createNumericButtons(), false)
document.body.addEventListener("load", createOperatorButtons(), false)