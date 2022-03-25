/* Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del 
array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado. */

const miarray=[2,8,20,99,63];
console.log(miarray);

function aleatorios() {
    return Math.floor(Math.random * 100) + 1;
}
for(let item of miarray ){
    item.miarray=aleatorios();
    miarray.sort();
}
console.log(miarray);


// const miarray=[];
// function aleatorios() {
//     return Math.floor(Math.random() * 100) + 1; 
// }
// for(let i=0; i<5; i++ ){
//     miarray[i]=aleatorios();
// }
// console.log('Antes de ordenar:',miarray);
// miarray.sort ((x,y)=>(x-y));
// console.log('Después de ordenar ascendente:',miarray);
// miarray.sort ((x,y)=>(y-x));
// console.log('Después de ordenar descendente:',miarray)