// Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese 
// tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
// Ejemplo, para lado = 4 escribiría:
// * * * *
// *     * 
// *     * 
// * * * *
// // Recuerda la estructura repetitiva For.


consola.clear( ) ;
const  prompt=require ("prompt-sync")() ;
let MAX=4;

let  lado  =  prompt ("Introduzca tamaño del lado del cuadrado: ") ;


function imprimir_linea(linea);
for (let i=0; i<MAX; i++) {
    console.log (imprimir_linea(i))}
    
    if (linea === 0 || linea === MAX-1 ) {
        rellenar_linea ("*","*")
    } else {
         rellenar_linea ("*"," ")
    }

    function rellenar_linea (extremo,central) {
        let linea = "";
        let simbolo ;

        for (let j=0; j<MAX; j++) {
            if (j===0 || j===MAX-1) {
                simbolo = extremo;
            } else {
                simbolo = central;
            }
            linea = linea + simbolo;
        }
        return linea
    }

