/* Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 
100 */
console.clear
const prompt = require("prompt-sync")();


let multiplo2=0;
let multiplo3=0;

for (let i = 1; i < 100 ; i++) {
    
    i%2 === 0 ?multiplo2++ : {};
    i%3 === 0 ?multiplo3++ : {};
}
         console.log(`multiplo de 2: ${multiplo2}`)         
         console.log(`multiplo de 3: ${multiplo3}`)
    

         /*for (let i = 1; i < 100 ; i++) {
   if (i%2 === 0) {
        multiplo2 = i
        console.log(`multiplo de 2: ${multiplo2}`)
   }
   if (i%3 ===0) {
        multiplo3 = i
        console.log(`multiplo de 3: ${multiplo3}`)
   } else {
      console.log(`${i} no es multiplo ni de 2 ni de 3`)
   }*/
   cuenta_par +=(Number %2 ===0) ?1:0;