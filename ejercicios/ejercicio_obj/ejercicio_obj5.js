
/* Crear un catálogo de productos, donde de cada producto contenga código, descripción y precio.
 Se permitirá añadir nuevos producto, eliminar productos por su código y buscar productos por código o descripción.
La búsqueda por código será exacta y la búsqueda por descripción podrá especificar una parte de la descripción. 
La búsqueda podrá devolver varios productos. 
También se creará una función que nos liste el catálogo por consola. */

function Producto(codigo, descripcion, precio) {
  this.codigo = codigo;
  this.descripcion = descripcion;
  this.precio = precio;
  this.mostrar = function () {
    console.log(this.codigos, this.descripcion, this.precio);
  };
}
function Catalogo() {
  this.items = [];
  this.add = function (nuevoProducto) {
   if(!this.items.some(item=>item.codigo===nuevoProducto.codigo)){
     this.items.push(nuevoProducto);
   } 
  };
  this.buscar = function (codigo) {
    for (let item of this.items) {
      if (item.codigo === nuevoProducto.codigo);
      return item;
    }
  };
  this.delete = function (codigo) {
    let i=this.items.findIndex((item)=>item.codigo===codigo);
    this.items.splice(i,1);
  };
  this.size = function () {
      return this.items.length;
  }
};
console.clear();
const cat = new Catalogo();

cat.add(new Producto(1,"tomate", 5.0));
cat.add(new Producto(1,"sandia",6.0));
console.assert(cat.size() === 1, "Error al añadir tomate");

cat.add(new Producto(2, "cebolla", 6.0));
cat.add(new Producto(3, "pimiento", 7.0));
cat.add(new Producto(4, "lechuga", 8.0));
cat.add(new Producto(5, "patata", 9.0));
cat.add(new Producto(36, "chocolate", 50));
console.assert(cat.size() === 6, "Error al añadir chocalate");
cat.delete(36);
console.assert(cat.size() === 5, "Error al borrar 36");
const prod = cat.buscar(5);
console.assert(prod.codigo === 5, "Error al buscar 5");
console.log(item);
