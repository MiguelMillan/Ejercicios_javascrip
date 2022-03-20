/* Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N 
se leerá por teclado/*  */ 

console.clear();
const prompt = require("prompt-sync")();

const N =20;

let suma=0;
for(let i=1; i<=N; i++ ){
    suma+=i;
}
console.log(suma);
