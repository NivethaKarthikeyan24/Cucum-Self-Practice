import { Given, When, Then } from "@cucumber/cucumber";
import Calculator from "../../src/calculator";
import { expect } from "chai";

let calculator: Calculator;
let sum: number;

Given('I have a calculator', function () {
    calculator = new Calculator();
});

When('I {string} {int} and {int}', function (operator: string, num1: number, num2: number) {
    if (operator=='add')
  sum = calculator.add(num1, num2);
else if (operator=='subtract')
  sum = calculator.subtract(num1, num2);
else if (operator=='multiply')
  sum = calculator.multiply(num1, num2);
else if (operator=='divide')
  sum = calculator.divide(num1, num2);
else
console.log('Invalid operator');
});

Then('the result is {int}', function (result: number) {
  expect(sum).to.equal(result);
});