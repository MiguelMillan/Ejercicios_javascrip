/* Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir 
de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14. */

console.clear();
// const prompt = require("prompt-sync")();
 const N =4;
 let suma=0;
 let inicio= N + ((N%2===0)?2:1);

for(let i=0; i<N;  i++){
    suma+=inicio;
    inicio+=2;
 

}

 console.log(suma);
