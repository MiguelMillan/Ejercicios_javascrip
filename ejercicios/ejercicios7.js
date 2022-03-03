//Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
//calcule e imprima el cambio que se debe entregar al cliente.

const prompt = require("prompt-sync")();
const precio = Number(prompt("ingrese el precio del articulo:"));
const pago = Number(prompt("ingresa el pago:"));
let cambio = pago - precio;
if (cambio < 0) {
  console.log(`a`);
}else {
console.log(`El cambio es:${cambio}`);
}


