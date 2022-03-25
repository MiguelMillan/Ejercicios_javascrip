class Producto{
    constructor(codigo, descripcion, precio){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
    }
}class Pedido{
    constructor (producto, cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
    totalPedido(){
        return this.producto.precio*this.cantidad;
    }
}
class Catalogo{
    constructor(){
        this.listaProductos=[];
    }
    crear(){
        this.add(new Producto("codigo1","producto1",2.0));
        this.add(new Producto("codigo2","producto2",3.0));
    }
    searchCatalogo(code){ // Devuelve el objeto del catálogo que tiene ese código 
        return this.listaProductos.find ((item) => item.producto.codigo === code);
    }
    add (prod){
        if (!this.searchCatalogo(prod.codigo) ){  
            this.listaProductos.push(prod);
        } 
    }
    delete(code){
        if(this.searchCatalogo(code) >= 0){
            this.listaProductos.splice(i,1);
        }
    }list (){
        for(let item of this.listaProductos){
            console.log(item);
        }
    }
}
class Carrito {
    constructor(catalogo){
        this.catalogo=catalogo;
        this.listaPedidos=[];
    }
    searchCarrito(codigo){  // Nos devuelve el índice de nuestra listaPedidos donde está, y -1 si no está 
        return this.listaPedidos.findIndex ((item) => item.codigo === codigo);
    }
    empty() {
        this.listaPedidos = [];
    }
    add(codigo, cantidad){ 
        let i = this.searchCarrito(codigo);
        if(i >= 0){ // El producto ya está en el Carrito
            this.listaPedidos[i].cantidad += cantidad;
        } else { // El producto no está en el Carrito
            const pedido = new Pedido (this.catalogo.searchCatalogo(codigo), cantidad);
            this.listaPedidos.push(pedido);
        }
    } delete(codigo){
        if (this.searchCarrito(codigo) >= 0){
        let i = this.searchCarrito(codigo);
        if (i >= 0){
            this.listaPedidos.splice(i,1);
        }
    }
    update(codigo,cantidad)
    {
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad = cantidad;
        }
    }
    up (codigo)
    {
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad++;
        }
    }
    down (codigo)
    {
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad--;
        }
        if(this.listaPedidos[i].cantidad===0){ 
            this.delete(codigo);
        }
    }
    items ()
    {
        return this.listaPedidos.length();
    }
    total ()
    {
        let suma = 0;
        for(let item of this.listaPedidos){
            suma += this.listaPedidos[item.producto.precio]*this.listaPedidos[item.cantidad];
        }
        return suma;
    }
    list ()
    {
        for (let item of this.listaPedidos){
            console.log(this.listaPedidos[item], "Importe:", this.listaPedidos[item].totalPedido());
        }
        console.log("Total del Carrito:", this.total);
    }
    }
}