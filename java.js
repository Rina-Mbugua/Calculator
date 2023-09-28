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
operator = '/'

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