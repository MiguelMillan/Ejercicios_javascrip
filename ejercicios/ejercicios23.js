/* Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si 
no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha 
cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de 
febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch)
 */

console.clear
const prompt = require("prompt-sync")();
const dia = [31,28,31,30,31,30,31,31,30,31,30,31];
const mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
"septiembre","octubre","noviembre","diciembre"];
let day=-1
let month;
let year;
let continuar= true
do {



} while (continuar);


if ((dia<=31 && dia>=0) && (mes<=12 && mes>=0) &&(año>0));
/* const array	=Array(0,1,2,3,4,5,6,7,8,9,10,11); */

else{
    console.log(" no es valida:error");
    intento = (prompt("Introduce numero: "))
}
switch(true){
    case 1: {
        mes = enero;
        break;
      }
      case 2: {
        mes = febrero;
        break;
      }
      case 3: {
        mes = marzo;
        break;
      }
      case 4: {
        mes = abril;
        break;
      }
      case 5: {
        mes = mayo;
        break;
      }
      case 6: {
        mes = junio;
        break;
      }
      case 7: {
        mes = julio;
        break;
      }
      case 8: {
        mes = agosto;
        break;
      }
      case 9: {
        mes = septiembre;
        break;
      }
      case 10: {
        mes = octubre;
        break;
      }
      case 11: {
        mes = noviembre;
        break;
      }
      case 12: {
        mes = diciembre;
        break;
      }
      default:{
          console.log("el número del mes por su nombre:",[mes]);
          
      }
      /*  */
/* array[enero,febrero,marzo,abril,mayo,junio,julio,agosto,
    septiembre,octubre,noviembre,diciembre];
    console.log("el número del mes por su nombre:",[mes] */


}


