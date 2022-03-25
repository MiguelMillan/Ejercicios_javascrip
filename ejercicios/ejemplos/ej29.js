document.addEventListener ('DOMContentLoaded', evento => initialize(evento));
let ancla;

function initialize (evento) {
    document.getElementById('category').addEventListener("click",event => vaciar(event));
    document.getElementById('salary').addEventListener("click", event => vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
    ancla = document.getElementById('out');
}
function vaciar(event) {
    ancla.textContent="";
  document.getElementById(event.target.id).value = "";
}

function calcular() {
    ancla.textContent="";
    const nodo = document.createElement ('p');
    const nuevo = aumentoSueldo();
    if (nuevo) {
        nodo.textContent = `El nuevo sueldo es ${nuevo}`;
    } else {
        nodo.textContent = "Categoría errónea"; 
    }
    ancla.appendChild (nodo);
    
}
function aumentoSueldo() {
  const sueldo= parseInt(document.getElementById("salary").value);
  const category = parseInt(document.getElementById("category").value);
  const incrementos = [1.15, 1.10, 1.06, 1.03]
  return sueldo * incrementos[category];
} 