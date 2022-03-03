const prompt = require("prompt-sync")();
let cantidad = 0;
let suma = 0;
let maximo = -Infinity; //Infinity o -Infinity es para que tenga algo con lo que comparar
let minimo = Infinity;
let numero;
while (numero != 0) {
  numero = Number(prompt("Introduce un número: "));
  if (numero === 0) break; //Break para que se acabe el bucle si el numero es 0
  if (numero > maximo) {
    maximo = numero;
  }
  if (numero < minimo) {
    minimo = numero;
  }
  suma = suma + numero;
  cantidad = cantidad + 1;
}
console.log(
  "El minimo es",
  minimo,
  "el maximo es",
  maximo,
  "y la media es",
  suma / cantidad
);
