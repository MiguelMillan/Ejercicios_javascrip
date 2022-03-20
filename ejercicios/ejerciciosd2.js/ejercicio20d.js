// Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo 
// tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos 
// que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa

console.clear();
const prompt = require("prompt-sync")();
let clave="ureka";
let contador=1;
let intento = (prompt("Introduce la clave: ")); 
let clave2="clave erronea";
for(let i=0; i>contador; i++){
    if(contador<3)
    intento+=clave;
    else intento+=clave2;
    console.log("error al meter la clave");


}
