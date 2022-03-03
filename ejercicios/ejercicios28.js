/* Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta 
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS */

console.clear
const prompt = require("prompt-sync")();
let time=Number(prompt("cuantos segundos:"))

const tiempo= setTimeout(myRing, time*1000);



function myRing(){
    console.log("¡¡¡Ring!!!");
    clearTimeout(tiempo);//para limpiar el tempoarizador o acabar intervalos
}