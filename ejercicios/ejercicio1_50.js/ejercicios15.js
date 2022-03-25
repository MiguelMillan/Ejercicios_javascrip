/* Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el 
número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura 
while */
console.clear;
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero:"));

    while(number1 === 0){

       number1=Number(prompt("Introduce un numero: "));

    }
        if (number1 % 2 === 0){
            console.log(`El numero es par`);
        console.log("numero impar");
    }