//Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que 
//registran lo que surten en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe 
//calcular e imprimir el precio que hay que cobrarle al cliente. 
//Precio gasolina = 1.333€/litro
//1 galón = 3,78541 litros

const prompt = require("prompt-sync")();
const gallons = Number(prompt("introduce la cantidad de galones:"));

const gallonstolitres=3.78541;
const litreprice=1.333;

const litres=gallons*gallonstolitres*litreprice;
/* // opcion 2 
let price=gallons*gallonstolitres*litreprice;
console.log(`$[gallons]galones,son $[litres] litros y el precio es $[price]`); */