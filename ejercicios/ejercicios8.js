//Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
//si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo

const prompt = require("prompt-sync")();
const sueldo = Number(prompt("sueldo trabajador:"));

if (sueldo < 1000 || sueldo === 1000) {
  let sueldo = sueldo + sueldo * 0.15
  console.log(`amuneto sueldo ${suma}`);
} else {
  console.log(`nuevo sueldo`);
}
   
