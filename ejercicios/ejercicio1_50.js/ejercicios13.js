//Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el 
//perímetro y la superficie del mismo

const prompt = require("prompt-sync")();

const altura = Number(prompt("introduce un Sltura:"));

const base = Number(prompt("introduce un base:"));

if (altura>0 && base > 0){

    console.log("superficie perimetro es :",base*altura);
    console.log( "perimetro del rectangulo es :", 2*(base+altura));
}

