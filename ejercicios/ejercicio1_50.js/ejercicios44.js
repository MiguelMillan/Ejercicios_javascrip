/* Partir del ejercicio 2 y añadir la siguiente funcionalidad:
El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar. 
Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú. 
Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por 
pantalla:
“Seleccione el número de una de las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa.” */
const prompt = require("prompt-sync")();

let number1 = Number(prompt("introduce un numero:"));
let number2 = Number(prompt("introduce un numero:"));

let suma=number1+number2;
let resta=number1-number2;
let multiply=number1*number2;
let divicion=number1/number2;
miArray=[suma,resta,multiply,divicion];

function operaciones (x,y){
        
}
