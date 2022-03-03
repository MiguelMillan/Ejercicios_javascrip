/* console.clear();
const prompt = require("prompt-sync")();

const alumnos = Number(prompt("Introduce el numero de alumnos:"));

let notas=[];

// distintas forma de hacer un buclee un for es mas ordenados
for(let i=0; i < alumnos; i = i + 1){
    notas[i]=Number(prompt(`Introduce nota de alumno ${i+1}:`));
}
let j =0
while(j <alumnos){
    notas[j]=Number(prompt`Introduce nota de alumno ${j+1}:`);
    j=j+1;
}
// otra forma dde hacer sin array
let suma=0
for ( let i=0; i < alumnos; i++){
    suma=suma+notas [i];
    console.log(`la suma es ${suma}`);
    }
    console.log(`la media es ${suma/alumnos}`);

    let suma= 0;
    for (let i =0; i < alumnos; i= i + i){
        suma = suma+Number(prompt(`introduce nota de alumno ${i+1}`));
    }
    console.log(`la media es ${suma/alumnos}`);

    // ejercicos 
let suma=0;
let contAlumnos=0;
    let nota=0;
    while(nota>=0 && nota <10){
    nota=Number(prompt("ingrese la nota:"));
    if (nota>=0 && nota<=10); {
    suma=suma+nota;
    contAlumnos+1;
        }
        console.log(`El promedio de notas para los ${contAlumnos} alumnos es: ${suma/contAlumnos}`);
// dar duker hasta 10 alumnos */