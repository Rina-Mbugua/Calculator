//declare buttons button values
const mainButton = document.querySelectorAll('.mainButton');
const operatorButton = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelectorAll('.clearButton');
const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('displayDiv');

//function to handle button clicks 
function handleButtonClick(event) {
    const buttonValue = event.currentTarget.getAttribute('data-value');
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

//add event lissteners to buttons and document for keyboard input - it's a loop
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

document.addEventListener('keydown', function (e){
    const pressedKey = e.key.toLowerCase();
    console.log(pressedKey);
}) 
//the enter button should also equal = 

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