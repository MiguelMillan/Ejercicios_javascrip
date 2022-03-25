//Construir un algoritmo que te permita calcular la temperatura teniendo en cuenta el número de 
//sonidos emitidos por un grillo (en época de apareamiento) en un minuto, es una función que 
//depende de la temperatura. Como resultado de esto, es posible determinar el nivel de temperatura 
//haciendo uso de un grillo como termómetro

console.clear();
const prompt = require("prompt-sync")();
const N = Number(prompt("numero de sonidos: "));
if (N === 0) {
    console.log("error")
} else {
    console.log(T = N/4 + 40)
}
T=N/4+40;
const prompt = require("prompt-sync")();
const Numberofsounds=
Number(prompt("intrpducir numero de sonido:"));
if(Numberofsounds<=0){
    console.log("error en el dispocitivo de medida.El grillo a muerto");
    }else{
        const temperatura=Numberofsounds/4+40;
        console.log(`la temperatura es de: $ [temperatura]ºC `);
    }