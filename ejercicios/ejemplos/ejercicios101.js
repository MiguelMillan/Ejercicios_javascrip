const prompt = require("prompt-sync")();

let salary = Number(prompt("Introduce el Sueldo:"));
const categoria = Number(prompt("Categoría entre 1-4:"));

const incrementos =[1.15,1.10,1.06,1.03];
// con corchetes acedemos a los array
// si acedemos con un numero de que no esta en los corchete nos daria underfail
if (categoria >=1 && categoria <=4){
    console.log("el nnuevo sueldo es:",salary *incrementos[categoria-1]);
}


