//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de 
//sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y 
//su nuevo sueldo.
//CATEGORIA INCREMENTO
//1 15%
//2 10%
//3 6%
//4 3%

document.addEventListener ('DOMContentLoaded', evento => initialize(evento));
function initialize (evento) {
    document.getElementById('category').addEventListener("click",event => vaciar(event));
    document.getElementById('salary').addEventListener("click", event => vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
}
function vaciar(event) {
  document.getElementById(event.target.id).value = "";
  function vaciar() {
    document.getElementById("numero").value = "";
  }
  }
function calcular() {
    this. numero = document.getElementById("numero").value;
    document.write("out").innerHTML =`El incremento de ${salary * category} es ${total()}`;
  }


function Aumento_sueldo() {
  this.sueldo= parseInt(document.getElementById("sueldo").value);
  this.category = parseInt(document.getElementById("category").value);
  this.incrementos = [1.15, 1.10, 1.06, 1.03]
  this.sueldo = sueldo * incrementos[category]
  this.aumento = parseInt(document.getElementById("nuevo").value);
  document.getElementById("out").innerHTML = (`El aumento es ${nuevo}`);
} 
  function loadItems(array) {
    this.empty();
    array.forEach (item=>this.add(item.incrementos.sueldo));
  
console.log ( `el nuevo sueldo es ${nuevo}`);

  }