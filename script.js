//click the digit, add the content of digit to a variable used in display

screenDisplay = document.querySelector("#screen");
screenDisplay.textContent = 0;
function updateDisplay(displayValue) {
    screenDisplay.textContent = displayValue;
}

let chosenOperation = "";

let allNumbers = document.querySelectorAll(".numbers");
allNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        //Number to operation goes in here
    })
})

let allOperations = document.querySelectorAll(".operations");
allOperations.forEach(operation => {
    if (operation.textContent == "AC") {
        operation.addEventListener('click', (e) => {
            // AC Function call
        })
    }

    if (operation.textContent == "x") {
        operation.addEventListener('click', (e) => {
            // Multiply Function call
        })
    }

    if (operation.textContent == "/") {
        operation.addEventListener('click', (e) => {
            // Divide Function call
        })
    }

    if (operation.textContent == "+") {
        operation.addEventListener('click', (e) => {
            // Plus Function call
        })
    }

    if (operation.textContent == "-") {
        operation.addEventListener('click', (e) => {
            // Minus Function call
        })
    }

    if (operation.textContent == ".") {
        operation.addEventListener('click', (e) => {
            // Decimal Function call
        })
    }

    if (operation.textContent == "=") {
        operation.addEventListener('click', (e) => {
            // Equals Function call
        })
    }
})

/*
// PRESSING NUMBER
press a number 
if number === 0 && screenDisplay === 0, do nothing.
if getOperation === "", add to firstNumber, update display
    else add to secondNumber, update display.
*/

/*
// PRESSING OPERATION
if getOperation === "", setOperation = operationPressed.
if getOperation !== "", operate(), and then setOperation = operationPressed.

if setOperation == ("="), operate() 

*/

//Need to think of a way to handle the display updates when buttons or operations are pressed.

/*
event listeners for each button.
    Numbers 
        - add button.textContent into first/second number variable.
    Operations 
        - CE Reset all variables.
        - (+,-,x,/) setOperation to corresponding operationPressed.
            - if getOperation !== "":
                - store operationPressed in a temp value(?)
                - operate()
                - add result to display
                - set chosenOperation to the newly pressed operation.
        - (=) check if both numbers exist.
            - set display to equal the chosen functions return value.    
*/

let num1, num2 = 0;
let operation = "";

function operate(num1, num2, operation) {
    if (operation === "+") {
        return add(num1, num2);
    }
    else if (operation === "-") {
        return subtract(num1, num2);
    }
    else if (operation === "*") {
        return multiply(num1, num2);
    }
    else if (operation === "/") {
        return divide(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        return 5318008
    }
    else return num1 / num2;
}