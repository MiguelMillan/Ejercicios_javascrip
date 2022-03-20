// Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En 
// cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por 
// pantalla:
// Introduce el número 1º.
// ➢ 8
// El cubo de 8 es 512. 
// Introduce el número 2º

console.log();
const  prompt=require ("prompt-sync")() ;

let number=0;

let MAX=10;

for  ( let  i = 0 ;  i < MAX ;  i ++ ) {
  number=number ( prompt ( "Introduzca el número " +  ( i + 1 )  +  "º: " ) ) ;
    consola.log( "El cubo de" +  number  + "es" +  ( number ** 3 ) )}