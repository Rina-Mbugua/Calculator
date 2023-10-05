//declare buttons button values
const mainButton = document.querySelectorAll('.mainButton');
const operatorButton = document.querySelectorAll('.operatorButton');
const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('displayDiv');
const equals = document.getElementById(equals);

//intitialise the variable to store the user's input
let userInput = ''; 

//function to update the display div with the user's input
function updateDisplay () {
    display.textContent = userInput;
}

//placeholder function to display what has been pressed
function selectedValue(value) {
    console.log(value)
}

//add event listener for buttons and document for keyboard input - it's a loop
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = button.getAttribute('data-value');
        userInput += buttonValue;
        updateDisplay();
    });
});

//event listener for keydown events 
document.addEventListener('keydown', function (e){
    userInput += e.key;
    updateDisplay();
}) 
//the enter button should also equal = 

document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', function () {
        userInput = '';
        updateDisplay();
    })
})




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

function Operate (a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Invalid operator: ${operator}')
    }
}
