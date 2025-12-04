let num1, num2 = 0;
let operation = "";

function operate(num1, num2, operation) {
    if(operation === "+") {
        return add(num1, num2);
    }
    else if(operation === "-") {
        return subtract(num1, num2);
    }
    else if(operation === "*") {
        return multiply(num1, num2);
    }
    else if(operation === "/") {
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
    if(num1 === 0 && num2 === 0) {
        return 5318008 
    }
    else return num1 / num2;
}

console.log(operate(5, 10, "+"));
console.log(operate(5, 10, "-"));
console.log(operate(5, 10, "*"));
console.log(operate(5, 10, "/"));
console.log(operate(0, 0, "/"));