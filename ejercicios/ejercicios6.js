//Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación módulo %

const prompt = require("prompt-sync")();
let number1 = Number(prompt("Introduce un numero: "));

if (number1 ===0){
    console.log(`nulo`);
}

if (number1 % 2 === 0){
    console.log(`El numero es par`);
    
if(number1 % 2 ===0)
    console.log(`El numero es impar`);
}
else{
    console.log(`el numero es nulo`);
}
