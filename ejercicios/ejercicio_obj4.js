function pedidos(codigo,cantidad){
    this.codigo=codigo;
    this.cantidad=cantidad;
}
    function carrito (catalogo){
        this.contenido=new Array();
        this.catalogo=catalogo;
        this.add=function(codigo,catalogo){
            if(buscar(codigo,catalogo)==null){
                return;
            }
         }
let item=buscar(codigo,this.contenido);
if(item==null){
  item=new pedidos(codigo,cantidad);
  this.contenido.push(item);
}else{
    item.cantidad+=cantidad;
}

function buscar(codigo,myArray){
   for(let item of Array){
       if(item.codigo===codigo);
       return item;
   }
   return null;
}
}
let carrito = new carrito (catalogo);
let catalogo = [{codigo: `codigo1`, descripcion:`producto1`, precio:2.0},
                {codigo: `codigo2`, descripcion:`producto2`, precio:3.0},
                {codigo: `codigo3`, descripcion:`producto3`, precio:4.0}];
carrito.add("codigo",2);
carrito.total("")===16;
carrito.list("");
carrito.empty("");
console.log(carrito);
            
    
