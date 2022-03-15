/* Generar un array de 20 elementos con números aleatorios no repetidos entre sí */

let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
miarray.forEach(function(item,index,){
    console.log(item);
});