//Construir algoritmo tal que con un número entero como entrada,
// determine e imprima si es positivo, 
//negativo o nulo



const prompt = require("prompt-sync")();
let number1 = Number(prompt("Introduce un numero: "));


  if (number1 >0){
  console.log(`El numero es positivo`);
  number1=0;
   } else if (number1<0)
  console.log(`El numero es negativo`)
else 
  console.log(`el numero es nulo`);
