/**
 * Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales 
 * (recuerda usar la estructura condicional if).
    Ahora con 3 números diferentes.
 */
    console.clear();
    const prompt = require("prompt-sync")();
    let number1 = Number(prompt("Introduce un numero: "));
    let number2 = Number(prompt("Introduce el segundo numero: "));
    let number3 = Number(prompt("Introduce el tercer numero: "));
    /* if (number1 > number2) {
      console.log(`El numero ${number1} es mayor que ${number2}`);
    } else if (number1 < number2) {
      console.log(`El numero ${number1} es menor que ${number2}`);
    } else {
      console.log("Los numeros son iguales");
    } */
    //Segunda parte
    if (number1 < number2) {
      if (number2 < number3) {
        console.log(`El numero ${number3} es el mayor`);
      } else if (number2 > number3) {
        console.log(`El numero ${number2} es el mayor`);
      } else {
        console.log(`Los numeros ${number2} y ${number3} son iguales`);
      }
    } else if (number1 > number2) {
      if (number1 < number3) {
        console.log(`El numero ${number3} es el mayor`);
      } else if (number1 > number3) {
        console.log(`El numero ${number1} es el mayor`);
      } else {
        console.log(`Los numeros ${number1} y ${number3} son iguales`);
      }
    } else {
      if (number3 > number1) {
        console.log(`El numero ${number3} es mayor que el ${number1}`);
      } else {
        console.log("Todos los numeros son iguales");
      }
    }
    