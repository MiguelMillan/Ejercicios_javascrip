/* En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El 
descuento se basa en:
Si el monto es menor que 500€ -> No hay descuento
Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
Más de 15.000€ -> 25% descuento
Imprimir (Escribir) el precio final */

console.clear();
const prompt = require("prompt-sync")();
const compra = Number(prompt("Compra: "));
 if (compra<=500 && compra>=0) {
    console.log("no hay descuento")
} else if (compra>500 && compra<=1000) {
    console.log(`${compra - compra*0.05}`)
} else if (compra>1000 && compra<=7000) {
    console.log(`${compra - compra*0.1}`)
} else if (compra>7000 && compra<=15000) {
    console.log(`${compra - compra*0.2}`)
}else {
    console.log(`${ compra - compra*0.25}`)
}
/* let preciofinal = 0
switch (true) {
    case compra <= 500 && compra >= 0:
        break;
    case compra > 500 && compra <= 1000:
        preciofinal = compra - compra * 0.05;
        break;
    case compra > 1000 && compra <= 7000:
        preciofinal = compra - compra * 0.1;
        break;
    case compra > 7000 && compra <= 15000:
        preciofinal = compra - compra * 0.2;
        break;
    default: preciofinal = compra - compra * 0.25
        break;
}
if (preciofinal != 0) {
    console.log(`nuevo precio${preciofinal}`)
} else {
    console.log("no hay descuento")
} */










