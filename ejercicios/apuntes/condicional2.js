//condicionales-if/else

//como hacer condicionales en js. se pueden concatenar todo lo largo que queramos

//los ocnidcionales if else os permite ejecutar código, siempre y cuandp se cumpla la
//condicion que hayamos programado. las palabras reservadas son "if" "else"

let demo = "var"
if (demo==="var"){
    console.log ("Es el demonio")
} else{
    console.log ("No es el demonio, menos mal!!")
}

//si en la consola ejecutamos node conditional.js nos va a salir es el demonio

const number = 5
if(number % 2===0){
    console.log ("el número es par")
} else{
    console.log ("El número es impar")
}
//ponemos % porque si ponemos/ nos haría la division y no es correcto. Con % nos haya el resto

if(number>0){
    console.log ("el número es mayor que 0");
} else if (number<0){
 console.log("el número es menor que cero");
}else{
    console.log ("el número es cero");}
