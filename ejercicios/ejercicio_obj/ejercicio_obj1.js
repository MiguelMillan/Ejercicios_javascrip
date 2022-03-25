/* -Crear un script que defina un objeto llamado Producto_alimenticio.
-Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
-Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados */



function producto_alimentario (codigos,nombres,precio){

    this.codigos=codigos; 
    this.nombres=nombres;
    this.precio=precio;
    this.mostrar = function () {
        console.log(this.codigos,this.nombres,this.precio);
    }
}
let patata= new producto_alimentario(7,"patatas",0.5);
let pera=new producto_alimentario(6,"pera",1.20);
let tomate=new producto_alimentario(5,"tomate",1.50);
const myArray=[patata,pera,tomate];

for (let item of myArray){
    item.mostrar();
}