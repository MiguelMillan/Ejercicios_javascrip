/* Mantener un array donde tengamos una lista de especies de animales
 y el número de patas que tiene cada uno. 
 Crear una función que calcule un número aleatorio entre y 100 para cada tipo de animal,
 de tal modo que devuelva finalmente el número de patas que hay en la granja */

const MAX_animal=100;

const animales = [{nombre:'perro',patas:4,und:0},{nombre:'pato',patas:2,und:0},{nombre:'gallina',patas:2,und:0}];
let suma=0;

const aleatorio= function () {
    return Math.floor(Math.random*100)+1;
}
/* function random () {
    return Math.floor(Math.random()*100)+1;
} */

for(let item of animales){
    item.und = aleatorio();
    suma += item.und*item.patas;
    
}
console.log(`la suma es ${item.und}y la suma es ${item.patas}`);