// Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 
// 100.

console.clear
const prompt = require("prompt-sync")();
let multiplo2=0;
let multiplo3=0;
let MAX=100;
let MIN=1;


for(let number=MIN;number<MAX;number++){
if(number%2==0 && number%3==0)
multiplo2=number;
multiplo3=number;

}
console.log(`multiplo de 2: ${multiplo2}`)         
console.log(`multiplo de 3: ${multiplo3}`)