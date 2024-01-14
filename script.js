const operators = ["CLEAR",  "÷", "x", "+", "-", "=", "."]
const numericContainer = document.getElementById('numeric-container')
const operatorContainer = document.getElementById('operator-container')
const paragraph = document.getElementById('display')

let firstNum, secondNum, operator, result, previousOperator;

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

const displayText = input => {
    document.body.addEventListener('click',  (event)  => {
        let target = event.target.id
        if(target === input.toString()) {
            if(paragraph.textContent == "0") {
                paragraph.textContent = target
                firstNum = target
            } else {
                paragraph.textContent += target
                firstNum += target
            }

            console.log(firstNum, secondNum, result)
        }
        

      event.preventDefault()
    })
}

const runOperation = input => {
    document.body.addEventListener('click', (event) => {
        let target = event.target.id
        if(target === input.toString()) {
            switch(target) {
                case "CLEAR":
                    resetCalculator()
                    break;
                case "÷":
                    setVariables("/")
                    break;
                case "x":
                    setVariables("*")
                    break;
                case "+":
                    setVariables("+")
                    break;
                case "-":
                    setVariables("-")
                    break;
                case "=":
                    if(secondNum == undefined) break
                    setVariables("=")
                    paragraph.textContent = result
                    break;
                case ".":
                    if(!firstNum.includes(".")) {
                        firstNum += "."
                        paragraph.textContent += "."
                    }
                default:
                    break
            }
        }
    })
}

function setVariables(op) {
    if(op != "=") {
        if(operator == undefined) {
            operator = op
        } else {
            previousOperator = operator
            operator = op
        }
    } 

    paragraph.textContent = operator

    if(firstNum != "" && secondNum != undefined) {
        if(op != "=") {
            secondNum = operate(parseFloat(secondNum), parseFloat(firstNum), previousOperator)
            result = operate(parseFloat(secondNum), parseFloat(firstNum), operator)
            firstNum = ""
        } else {
            result = operate(parseFloat(secondNum), parseFloat(firstNum), operator)
            secondNum = result
            firstNum = ""
        }
    }

    if(secondNum == undefined) {
        secondNum = firstNum
        firstNum = ""
    }
}

const createButtons = () => {
    for(let i = 9; i >= 0; i--) {
        let button = document.createElement('button')
        button.id = `${i}`
        button.textContent = `${i}`
        button.click(displayText(i))
        numericContainer.appendChild(button)
    }

    for(let symbol of operators) {
        let button = document.createElement('button')
        button.id = `${symbol}`
        button.textContent = `${symbol}`
        button.click(runOperation(symbol))
        symbol == "." ? numericContainer.appendChild(button) : operatorContainer.appendChild(button)
    }
}


document.body.addEventListener("load", createButtons(), false)


function resetCalculator() {
    console.log("reset click")
    display.textContent = "0"
    displayValue = ""
    firstNum = ""
    secondNum = undefined
    operator = undefined
    previousOperator = undefined
    result = undefined
}