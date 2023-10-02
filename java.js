//declare buttons button values

const mainButton = document.querySelectorAll('.mainButton');
const operatorButton = document.querySelectorAll('operatorButton');
const clearButton = document.querySelectorAll('clearButton');

//function to handle button clicks 
function handleButtonClick(event) {
    const buttonValue = event.currectTarget.getAttribute('data-value');
    selectedValue(buttonValue); 
}

//function to handle keyboard press, need to add test that only certain characters can be pressed.
function handleKeyPress(event) {
    const pressedKey = event.key();
    selectedValue(pressedKey);
}

//placeholder function to display what has been pressed
function selectedValue(value) {
    console.log(value)
}

function add (a, b) {
    return a + b
}
console.log(add(5, 10))

function subtract (c, d) {
    return c - d
}
console.log(subtract(30, 3))

function multiply (e, f) {
    return e * f
}
console.log(multiply(25, 4))

function divide (g, h) {
    return g / h
}
console.log(divide(365, 12))

let firstNumber;
firstNumber = 10;

let secondNumber;
secondNumber = 5;

let operator;
operator = '+'

function calcOperation (firstNumber, operator, secondNumber) {
    if (operator === '+'){
        return firstNumber + secondNumber;
    }
    else if (operator === '-') {
        return firstNumber - secondNumber;
    }
    else if (operator === '*') {
        return firstNumber * secondNumber;
    }
    else if (operator === '/') {
        return firstNumber / secondNumber;
    }
    else {
        return 'Invalid operator';
    }
}
console.log(calcOperation(firstNumber, operator, secondNumber))