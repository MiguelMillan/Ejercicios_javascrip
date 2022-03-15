/* Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI 
completo con la letra. Para calcular la letra, cogeremos el resto del DNI entre 23, que será un 
número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que 
corresponda a la letra. Esta es la tabla de caracteres */

console.clear();
const prompt = require("prompt-sync")();
const numero = prompt("Introduce tu número de DNI (sin la letra)");

let numberDni=Number(prompt("introduce DNI:"))

const letterArray = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let index=numberDni %23;


console.log(numberDni+letterArray[index]);