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
    return num1 / num2;
}
//Higher order function sice it take another function as input into it.
function calculator(num1, num2, operator) {
    return operator(num1 + num2);
}
