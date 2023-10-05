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
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault(); // prevent the default behavior of the 'Enter' key.
        equalsButton.click();
    } else {
        // Add a condition to exclude non-numeric and non-operator keys
        const validKeys = /^[0-9+\-*/=]$/;
        if (validKeys.test(e.key)) {
            userInput += e.key;
            updateDisplay();
        }
    }
});

//function to update the display div with the user's input
const display = document.getElementById('displayDiv');
function updateDisplay () {
    display.textContent = userInput;
}


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
            throw new Error(`Invalid operator: ${operator}`)
    }
}


//perform calculations based on operators


//perform calculations in pairs by looping through the numbers & operators arrays and udpdatinf the results 
function performCalculation () {

    const parts = userInput.split("="); //remove the equals sign from the 'string'

    //the entire calc should not be less than two tokens
    if (parts.length < 2) {
        console.log('Invalid input.');
        return;
    }

    //split userInput string into Numbers and Operators arrays using for loop
const tokens = parts[0].split(/([+\-*/](?!=))/).map(token => token.trim());

console.log("userInput:", userInput);
console.log("tokens:", tokens);

const filteredTokens = tokens.filter(token => token !== "");

//The arrays are being initialized  
const numbers = [] 
const operators = []

filteredTokens.forEach(token => {
    if (!isNaN(token)) {
        numbers.push(parseFloat(token))
    } else {
        operators.push(token);
    }
});

console.log("numbers:", numbers);
console.log("operators:", operators);

//initialise the first number of the operation with the first token in the numbers array 
    let result = numbers.shift();

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i];

          // Check for division by zero
          if (operator === '/' && nextNumber === 0) {
            alert("Zero division detected! Time for a math refresher.");
            userInput = 0; // Update userInput to 0
            updateDisplay(0); // Update the display to show 0
            return; // Stop the function
        }

        result = operate(result, operator, nextNumber)
    }

    //output the final result 
    console.log('result:', result);

    userInput = result

    updateDisplay(result);
}


//event listerners for equals to call performCalculation()  
const equalsButton = document.getElementById('equalsButton');
equalsButton.addEventListener('click', performCalculation);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault(); // Prevent the default behavior of the key
        equalsButton.click(); // Trigger a click event on the "=" button
    }
});

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
