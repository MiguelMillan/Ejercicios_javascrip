// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.
console.clear();
const prompt = require("prompt-sync")();
let number1 = Number(prompt("Introduce un numero: "));
let number2 = Number(prompt("Introduce el segundo numero: "));
let number3 = Number(prompt("Introduce el tercer numero: "));
// is not a number
isNaN(number1); // ----> true/false
if (number1 >= 0) {
  const sum = number1 + number2 + number3;
  console.log(`La suma es ${sum}`);
} else {
  const multiply = number1 * number2 * number3;
  console.log(`El producto es ${multiply}`);
}                               