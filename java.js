//intitialise the variable to store the user's input and split into numbers & operators 
let userInput = ''; 

//EventListener loop for buttons and update display
const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = button.getAttribute('data-value');
        userInput += buttonValue;
        updateDisplay();
    });
});

//Event listener for keydown events and update display 
document.addEventListener('keydown', function (e){
    userInput += e.key;
    updateDisplay();
}) 

//function to update the display div with the user's input
const display = document.getElementById('displayDiv');
function updateDisplay () {
    display.textContent = userInput;
}

//split userInput string into Numbers and Operators arrays using for loop
const tokens = userInput.split(/([+\-*/])/).map(token => token.trim());

const filteredTokens = tokens.filter(token => token !== "");

//The arrays are being initialized  
const numbers = [] 
const operators = []

filteredTokens.forEach(token => {
    if (!NaN(token)) {
        numbers.push(parseFloat(token))
    } else {
        operators.push(token);
    }
});

//const operatorButton = document.querySelectorAll('.operatorButton');
//operate logic 
function operate (a, operator, b) {
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


//add event listerner for equals to call operate() function  
const equals = document.getElementById(equals);

//perform calculations based on operators



//clear button  
document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', function () {
        userInput = '';
        updateDisplay();
    })
})

//declare buttons button values
//const mainButton = document.querySelectorAll('.mainButton');
