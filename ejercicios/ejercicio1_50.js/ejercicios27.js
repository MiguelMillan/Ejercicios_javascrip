/* Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por 
teclado. Para N = 13, el output sería */

console.clear
const prompt = require("prompt-sync")();
const Number=prompt("introduce un numero:");

let Number1=0;
let multiply;
 
for (let i = 1; i <= 10 ; i++){
multiply=Number1*i;
console.log(`la multiplicacion es${Number1}*${i}`);
}