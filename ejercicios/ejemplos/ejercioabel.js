let bigNumber=0;
let iguales=false;
// Aquí comparamos los dos primeros números, guardamos el mayor, y si son iguales lo guardamos en la variable 'iguales'
if (number1 > number2){
    bigNumber = number1;
} else if (number1 < number2){
    bigNumber = number2;
} else {
    bigNumber = number1;
    iguales = true;
}
// Y aquí comparamos el mayor con el tercer número 
if (bigNumber > number3){
    console.log("El número " + bigNumber + " es el mayor");
} else if (bigNumber < number3){
    console.log("El número " + number3 + " es el mayor");
} else if ((bigNumber===number3)&&(iguales===true)){
    console.log("Todos los números son iguales");
} else {
    console.log("El número " + bigNumber + " es el mayor y es igual al último número introducido");
}
