/* Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con 
que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del 
algoritmo el resultado. */


function sonIguales(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  ​
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  ​
    return true;
  }
  let arrayUno = [1, 2, 3];
  let arrayDos = [1, 2, 3];
  console.log(sonIguales(arrayUno, arrayDos));