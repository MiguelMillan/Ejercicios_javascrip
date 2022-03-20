/* Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media 
de todos ellos. Piensa como debemos inicializar las variables */

console.clear();
const prompt = require("prompt-sync")();

let number=0;
let MAX=-Infinity;
let MIN=Infinity;
let suma=0;
const miarray=[];

do {
    number = Number (prompt ("Dame un Numero"));
    if(number!==0) {
        miarray.push(number);
    }
} while (number!==0);
console.log(miarray);
for(let item of miarray){
    suma=suma+number;
    if (item > MAX) {
        MAX = item;
    }
    if(item<MIN){
        MIN=item;
    }
}

console.log(`El MAX ${MAX}El MIN ${MIN}Y la media es ${suma/number}`);
