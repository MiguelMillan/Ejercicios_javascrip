/* Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir 
de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14. */

console.clear
const prompt = require("prompt-sync")();
const number1 = Number(prompt("Introduce un numero primeros: "));

let contador=0;
let suma=0;
if (n%2===0){
    contador=n+2 // contador de n no se incluyen. si se incluyera solo hay que quita el `+2
}
else {
    contador=n+1
}
for (let i=0; i<n; i++)1;
console.log( "las suma de los primeros:", amout,"pares es ",suma);
