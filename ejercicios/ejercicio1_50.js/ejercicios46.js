/* Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir 
estos números de forma descendente */


console.clear();
const nOrder = [];
for (let i = 0; i < 10; i++){
    nOrder[i] = Math.round(Math.random() * 100) +1;
}
const ordered = nOrder.sort((a, b) => (a > b) ? -1 : 1);
console.log(ordered);