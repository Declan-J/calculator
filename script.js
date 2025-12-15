let screenDisplay = {

    number1: "0",
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
decimalButton = document.querySelector("#decimal_button");
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

function updateDisplay() {
    if (screenDisplay.operation == "" && screenDisplay.firstNumber.includes(".")) {
        decimalButton.disabled = true;

    }
    if (screenDisplay.firstNumber.includes(".") && screenDisplay.operation !== "") {
        decimalButton.disabled = false;
    }

    if (screenDisplay.operation !== "" && screenDisplay.secondNumber.includes(".")) {
        decimalButton.disabled = true;
    }
    if (screenDisplay.operation !== "" && screenDisplay.secondNumber.includes()) {
        decimalButton.disabled = false;
    }

    if (screenDisplay.firstNumber == "") screenDisplay.firstNumber = "0";

    //console.log(`First Number: ${screenDisplay.firstNumber} Operation: ${screenDisplay.operation} Second Number: ${screenDisplay.secondNumber}`)

    screenDiv.textContent = `${screenDisplay.firstNumber} ${screenDisplay.operation} ${screenDisplay.secondNumber}`;
}

function numberEventHandler(number) {

    if (screenDisplay.operation == "") {

        // If 0 is pressed, and firstNumber is 0, and operation isn't set = can't enter more 0's in firstNumber.
        if (number === "0" && screenDisplay.firstNumber === "0") {
            console.log("no more 0's in firstNumber")
            return;
        }

        // Any number pressed, and firstNumber is 0 = replace display with pressed number.
        else if (number !== "0" && screenDisplay.firstNumber === "0") {
            screenDisplay.firstNumber = "";
            screenDisplay.firstNumber += number;
            updateDisplay();
            return;
        }

        // Any number pressed while operation isn't set = enter number in firstNumber.
        else {
            screenDisplay.firstNumber += number;
            updateDisplay();
            return;
        }
    }

    //Logic for entering second number.
    else if (screenDisplay.operation !== "") {

        // If 0 is pressed, operation is set, and secondNumber is 0 = can't enter more 0's.
        if (number === "0" && screenDisplay.secondNumber == "0") {
            console.log("no more 0's in secondNumber")
            return;
        }

        // Any number pressed, and secondNumber is 0 = replace display with pressed number.
        else if (number !== "0" && screenDisplay.secondNumber === "0") {
            screenDisplay.secondNumber = "";
            screenDisplay.secondNumber += number;
            updateDisplay();
            return;
        }

        else if (number === "0" && screenDisplay.secondNumber == "") {
            screenDisplay.secondNumber = "0";
            updateDisplay();
            return;
        }

        else {
            screenDisplay.secondNumber += number;
            updateDisplay();
            return;
        }

    }
    console.log("first number = " + screenDisplay.firstNumber + " second number = " + screenDisplay.secondNumber)
}

function operationEventHandler(operation) {
    switch (operation) {
        case "AC":
            allClear();
            break;

        case "x":
            //Display "x" operation if operator is empty.
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "x";
                updateDisplay();
            }
            //operate(), set operation to "x" otherwise.
            else if (screenDisplay.operation !== "") {
                operateAndSetFirstNumber();
                screenDisplay.operation = "x";
                updateDisplay();
            }
            break;

        case "/":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "/";
                updateDisplay();
            }
            else if (screenDisplay.operation !== "") {
                operateAndSetFirstNumber();
                screenDisplay.operation = "/";
                updateDisplay();
            }
            break;

        case "+":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "+";
                updateDisplay();
            }
            else if (screenDisplay.operation !== "") {
                operateAndSetFirstNumber();
                screenDisplay.operation = "+";
                updateDisplay();
            }
            break;

        case "-":
            if (screenDisplay.operation == "") {
                screenDisplay.operation = "-";
                updateDisplay();
            }
            else if (screenDisplay.operation !== "") {
                operateAndSetFirstNumber();
                screenDisplay.operation = "-";
                updateDisplay();
            }
            break;

        case "=": {
            if (screenDisplay.secondNumber != "") {
                screenDisplay.firstNumber = operate(screenDisplay.firstNumber, screenDisplay.secondNumber, screenDisplay.operation)
                updateDisplay();
            }
            break;
        }

        case ".": {
            if (screenDisplay.operation == "") {
                screenDisplay.firstNumber = screenDisplay.firstNumber.slice(0, 1) + "." + screenDisplay.firstNumber.slice(1);
                updateDisplay();
            }
            else {
                screenDisplay.secondNumber = screenDisplay.secondNumber.slice(0, 1) + "." + screenDisplay.secondNumber.slice(1);
                updateDisplay();
            }
            break;
        }
    }
}

backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', (e) => {
    backspacePressed();
})

function backspacePressed() {
    if (screenDisplay.operation !== "" && screenDisplay.secondNumber == "") {
        //delete operation
        screenDisplay.operation = "";
        updateDisplay();
    }
    else if (screenDisplay.operation !== "") {
        //delete last char of secondNo
        screenDisplay.secondNumber = screenDisplay.secondNumber.slice(0, -1);
        updateDisplay();
    }
    else if (screenDisplay.operation == "") {
        //delete last char of firstNo
        screenDisplay.firstNumber = screenDisplay.firstNumber.slice(0, -1);
        updateDisplay();
    }
}

function allClear() {
    screenDisplay.firstNumber = "0";
    screenDisplay.secondNumber = "";
    screenDisplay.operation = "";
    decimalButton.disabled = false;
    updateDisplay();
}

function operateAndSetFirstNumber() {
    screenDisplay.firstNumber = operate(screenDisplay.firstNumber, screenDisplay.secondNumber, screenDisplay.operation);
}

function operate(num1, num2, operation) {
    if (screenDisplay.secondNumber == "") {
        return;
    }

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
    return (num1 + num2).toFixed(10);
}

function subtract(num1, num2) {
    return (num1 - num2).toFixed(10);
}

function multiply(num1, num2) {
    return (num1 * num2).toFixed(10);
}

function divide(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        return 5318008
    }
    else return (num1 / num2).toFixed(10);
}