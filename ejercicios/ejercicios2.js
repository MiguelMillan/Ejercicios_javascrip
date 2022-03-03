//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("introduce un numero:"));

let number2 = Number(prompt("introduce un numero:"));


let sum = number1 + number2;

let rest = number1 - number2;

let multiply = number1 * number2;

let división = number1 / number2;

console.log(`la suma de los dos numeros ${sum}`)
console.log(`la resta de los dos numeros ${rest}`)
console.log(`la multiplicacion de los dos numeros ${multiply}`)
console.log(`la divicion de los numeros ${división}`)
