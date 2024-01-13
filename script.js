const operators = ["CLEAR",  "÷", "x", "+", "-", "=", "."]
const numericContainer = document.getElementById('numeric-container')
const operatorContainer = document.getElementById('operator-container')
const paragraph = document.getElementById('display')

let firstNum, secondNum, operator, result;

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

            console.log(firstNum)
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
                    console.log("eval clicked")
                    console.log("2# = " + secondNum + ". 1# = " + firstNum + ". res = " + result)
                    console.log(operate(parseInt(secondNum), parseInt(firstNum), operator))
                    result = operate(parseInt(secondNum), parseInt(firstNum), operator)
                    paragraph.textContent = result
                    break;
                default:
                    break
            }
        }
    })
}

function setVariables(op) {
    operator = op
    secondNum = firstNum
    firstNum = ""
    paragraph.textContent = operator

    if(result != undefined) secondNum = result

    console.log("variables set")
    console.log("2# = " + secondNum + ". 1# = " + firstNum + ". result = " + result)
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
    secondNum = ""
    operator = ""
    result = undefined
}