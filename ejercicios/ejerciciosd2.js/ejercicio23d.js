// Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si 
// no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha 
// cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de 
// febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch)

console.clear
const prompt = require("prompt-sync")();
const dia = [31,28,31,30,31,30,31,31,30,31,30,31];
const mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
"septiembre","octubre","noviembre","diciembre"];


function Calendario (dia,mes,año){
    this.dia=Numero(prompt("Introduzca dia: "));
    this.mes=Número(prompt("Introduzca mes: "));
    this.año=Numero(prompt("Introduzca año: "));
    
}
if ((dia>=1 && dia<=31) && (mes<=12 && mes>=0) &&(año>0));

if ((día <= 0) && (día > 31) && (mes <= 0) && (mes > 12) && (año < 0)) {
    console.log("La fecha es inválida.")}

if  ( mes  === 2  &&  año  %  4  ===  0 ){
mes [ m ]  =  29;
console.log("el mes es bisiesto")
}
console.log(`la fecha es: ${dia} el mes es: ${mes[mes]}y el año es: ${año}`);