const operators = ["CLEAR",  "÷", "x", "+", "-", "=", "."]
const numericContainer = document.getElementById('numeric-container')
const operatorContainer = document.getElementById('operator-container')
const paragraph = document.getElementById('display')

let firstNum, secondNum, operator;
let displayValue;

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
      updateDisplay(event, input)
      event.preventDefault()
    })
  }
  
  function updateDisplay(event, input) {
    if(event.target.id === input.toString()) {
      
      if(paragraph.textContent == "0") {
        display.textContent = event.target.id
        displayValue = event.target.id
      } else {
        display.textContent += event.target.id
        displayValue += event.target.id
      }
      
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
        symbol == "." ? numericContainer.appendChild(button) : operatorContainer.appendChild(button)
    }
}


document.body.addEventListener("load", createButtons(), false)