const prompt = require("prompt-sync")();

let salary = Number(prompt("Introduce el Sueldo:"));
const category = Number(prompt("Categoría entre 1-4:"));

const incrementos =[1.15,1.10,1.06,1.03];
// asi seria lo de un buclle hasta que se cumpla
let indice=0
while(indice<category){
    indice=indice+1;
}
if(indice===category){
    console.log("Nuevo sueldo",salary*incrementos[indice-1])
}
