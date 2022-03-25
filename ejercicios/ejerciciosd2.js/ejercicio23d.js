// Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si 
// no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha 
// cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de 
// febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch)

console.clear
const prompt = require("prompt-sync")();
const dia = [31,28,31,30,31,30,31,31,30,31,30,31];
const mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
"septiembre","octubre","noviembre","diciembre"];

let validar=true;
let year;


do {
    dia=Number(prompt("Introduzca dia: "));
    mes=Number(prompt("Introduzca mes: "));
    year=Number(prompt("Introduzca año: "));
    
}while (validar){
    if ((dia>=1 && dia<=31) || (mes<=12 && mes>=0) ||(year>0)){
        console.log(`la fecha es: ${dia} el mes es: ${mes[mes]}y el año es: ${year}`)
    
}
if ((día <= 0) && (día > 31) && (mes <= 0) && (mes > 12) && (year < 0)) {
    console.log("La fecha es inválida.")}

if  ( mes  === 2  &&  año  %  4  ===  0 ){
mes [ mes ]  =  29;
console.log("el mes es bisiesto")


}
}
