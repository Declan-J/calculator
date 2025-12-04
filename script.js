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

console.log(add(5,10));
console.log(subtract(5, 10));
console.log(multiply(5, 10));
console.log(divide(5, 10));
console.log(divide(0, 0));