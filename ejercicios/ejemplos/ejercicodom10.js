//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de 
//sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y 
//su nuevo sueldo.
//CATEGORIA INCREMENTO
//1 15%
//2 10%
//3 6%
//4 3%
function initialize (evento) {
    document.getElementById('category').addEventListener("click",event => vaciar(event));
    document.getElementById('salary').addEventListener("click", event => vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
}
function vaciar(event) {
  document.getElementById(event.target.id).value = "";   function vaciar() {
    document.getElementById("numero").value = "";
  }
​
  function calcular() {
    const num = document.getElementById("numero").value;
    document.write(`El incremento de ${salary * category} es ${total()}`);
  }
  const sueldo = Number(prompt("Sueldo:"));
  const categoria = Number(prompt("Categoría entre 1-4:"));
  if (!isNaN(sueldo) && !isNaN(categoria)) {
    let incremento = 0;
    switch (categoria) {
      case 1: {
        incremento = 1.15;
        break;
      }
      case 2: {
        incremento = 1.1;
        break;
      }
      case 3: {
        incremento = 1.06;
        break;
      }
      case 4: {
        incremento = 1.03;
        break;
      }
      default: {
        console.log("Las categorias son entre 1-4");
      }
    }
    if (incremento > 0) {
      console.log("El sueldo nuevo es:   ", sueldo * incremento);
    }
  } else {
    console.log("Error de entrada");
  }


}