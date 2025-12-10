let screenDisplay = {

    number1: "",
    number2: "",
    operation: "",

    get firstNumber() {
        return this.number1;
    },

    set firstNumber(value) {
        this.number1 = value;
    },

    get secondNumber() {
        return this.number2;
    },

    set secondNumber(value) {
        this.number2 = value;
    },
}

screenDiv = document.querySelector("#screen");

function updateDisplay() {

    if (screenDisplay.firstNumber === "") {
        screenDiv.textContent = "0"
    }
    else {
        screenDiv.textContent = `${screenDisplay.firstNumber} ${screenDisplay.operation} ${screenDisplay.secondNumber}`;
    }
}
updateDisplay();

let allNumbers = document.querySelectorAll(".numbers");
allNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        numberEventHandler(number.textContent);
    })
})

let allOperations = document.querySelectorAll(".operations");
allOperations.forEach(operation => {
    operation.addEventListener('click', (e) => {
        operationEventHandler(operation.textContent);
    })
})

function numberEventHandler(number) {
    if (number == 0 && screenDisplay.firstNumber == 0) return;

    if (screenDisplay.operation === "") {
        screenDisplay.firstNumber += number;
        updateDisplay();
    }
    else if (number == 0 && screenDisplay.secondNumber == 0) return 
    else {
        screenDisplay.secondNumber += number;
        updateDisplay();
    }
}
/*
// PRESSING NUMBER
press a number 
if number === 0 && screenDisplay === 0, do nothing.
if getOperation === "", add to firstNumber, update display
    else add to secondNumber, update display.
*/

function operationEventHandler(operation) {
    switch (operation) {
        case "AC":
            allClear();
            break;

        case "x":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "x";
                updateDisplay();
            }
            else {
                //operate()
            }

        case "/":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "/";
                updateDisplay();
            }
            else {
                //operate()
            }

        case "+":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "+";
                updateDisplay();
            }
            else {
                //operate()
            }

        case "-":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "-";
                updateDisplay();
            }
            else {
                //operate()
            }

        case "=": {
            if (screenDisplay.secondNumber != "") {
                screenDisplay.firstNumber = operate(screenDisplay.firstNumber, screenDisplay.secondNumber, screenDisplay.operation)
                updateDisplay();
            }
        }

    }
}

function allClear() {
    screenDisplay.firstNumber = "";
    screenDisplay.secondNumber = "";
    screenDisplay.operation = "";
    updateDisplay();
}

/*
// PRESSING OPERATION
if getOperation === "", setOperation = operationPressed, update display.

if getOperation !== "" && secondNumber !== "", operate(), and then setOperation = operationPressed.
    else: setOperation = operationPressed.

if operationPressed == ("="), operate(), setOperation = "".

if operationPressed == ("AC"), reset all variables.

*/

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

function operate(num1, num2, operation) {
    allClear();
    num1 = Number(num1), num2 = Number(num2); 
    if (operation === "+") {
        return add(num1, num2);
    }
    else if (operation === "-") {
        return subtract(num1, num2);
    }
    else if (operation === "x") {
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