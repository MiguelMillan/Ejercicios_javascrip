document.addEventListener ('DOMContentLoaded', evento => initialize(evento));
function initialize (evento) {
    document.getElementById("nuevo").addEventListener("click",aumento);
    document.getElementById("sueldo").addEventListener("click",event=>vaciar(event));
    document.getElementById ("categoria").addEventListener ("click",event => vaciar(event));
}
function vaciar(event) {
  document.getElementById(event.target.id).value = "";/*el target llama al elemento que queramos, categoría, salario
  o calcular. Así solo tenemos una función vaciar para todo*/
}
function aumento() {
    let sueldo = parseInt(document.getElementById("sueldo").value);//utilizamos parseIn para pasar un string a un número
    let categoria = parseInt(document.getElementById("categoria").value);
    let incrementos = [1.15, 1.10, 1.06, 1.03]
    let nuevo = sueldo * incrementos[categoria]
      const aumento = parseInt(document.getElementById("nuevo").value);
        document.getElementById("out").innerHTML = (`El aumento es ${nuevo}`);
 console.log ( `el nuevo sueldo es ${nuevo}`);
}