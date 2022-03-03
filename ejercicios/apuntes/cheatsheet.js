//-- comentario en la consola del navegador a traves de console.log()

console.log("Hola desde cheatsheet JS")

//-- variable y Constantes


// las constantes no pueden ser modificadas
const username = "nacho"

//-- si intentamos modificar la constante nos da in error en la consola 
/*"username="miguel"()*/

console.log(username)

//variable que si se pueden modificar "let"

let age =34
age =35.

console.log(age)

// el domonio hecho variable
var demon = "var"

// este variable ademas de poderse modificar es de caracter global por lo que
//es muy facil que acabe sobreescribiendose
demon="let"

// tipos de datos



// datos simples

// string
// son cadenas de texto. siempre se van a representar con comillas simples o dobles
const welcome="Bienvenido a JS"
// number
//Son numeros ,tantos decimales como enteros


//boolean
//son valores que van a ser siempre verdadero o falso. y se representa con las palabras reservadas true
const isAlive= true

//undefined
//quiere decir que esa variable no esta definida. no debe  confundirse con null

let academy
console.log(academy)

//null
// esta variable si tiene un valor y su valor es "ninguno"
let address =null

//datos coplejos

//objetos/objects
//los objetos se crean igual que cualquier otra variable pero para crearlos utilizaremos las llaves {}
//dentro de los objetos lo que vamos a tener van a ser :propiedad/valor----->key/value
// para darle valor a la propiedad se utilizan los dos puntos ":"
//cada propiedad van separados por la comas ","

const user = {
name:"nacho",
surname:"viano",
address:{
 street:"calle larios",
 number: 5,
age: 34,
}

} ;
//para acceder a alguna propiedad de nuestro objeto, se hara a traves de un punto "."

console.log(user.address);

//array/lista

// los array son lista de elementos (string,number,objetos,array)
// los arrays estan compuestos por el mismo tipo de elementos
// se representa con los corchetes "[]"

const notes= [4,6,8,3,7,0];
const student=[{name:"nacho",surname:"viano"},{name:"Miguel",surname:"Millan"},{name:"Marta",surname:"De haro"},];

// para acceder a un elemento de esa lista , se hace con los corchetes 
// y dentro de ellos la posicion que queremos referencia ----> ^[2]

console.log(notes[2]);
console.log(student[1].surname);

//funciones/functions


//comparaciones/

//Doble igual==
// Con el doble igual lo que estamos comparando es si son tienen el mismo valor
//independientemente de su tipo

const a =2
const b ="2"
console.log (a == b);//---->true

//tripe igual
//compara dos variables incluyendo su tipo. para que sea true tienen que ser estrictamente iguales
const c=3
const d =3
console.log(c === d);//------->true

// diferente de !=
// son distintas idependientemente de su tipo

const f="2"
const h =2
console.log (f != h)//----fals

//estrictamente diferente
//compara el valor de dos variables incluyendo su tipo
console.log(f !== h);//-------true

//condicionales
//se utilizan cuando queremos tener un resultado dependiendo de si se cumplen o no las condiciones
const isDemon = demon === "var" && isAlive === false; // ----false

//&& significa "Y"y lo que comprueba es que las condiciones se cumplan

console.log(isDemon);

const isgod = demon !== "var"|| isAlive ===true;

//|| significa "o" y lo que comprueba es que una de las condiciones se cumple

//negacion
// !se utiliza la exclamacion para  cambiarle el valor a un elemento booleano


const newperson = !isAlive;


