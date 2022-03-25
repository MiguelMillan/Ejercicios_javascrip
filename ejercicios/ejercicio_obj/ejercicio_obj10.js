function pedido(codigo ,cantidad){
    this.codigo=codigo;
    this.cantidad=cantidad;
}
function carrito(catalogo){
    this.contenido=new Array();
    this.catalogo=catalogo;
    this.add=function(codigo,cantidad){
        if(buscarcodigo(codigo,catalogo)==null){
            return;
        }
        let item=buscarcodigo(codigo,this.contenido);
        if(item==null){
            item=new pedido(codigo,cantidad);
            this.contenido.push(item);
        } else{
            item.cantidad+=cantidad;
        }
    }
    function buscarcodigo(codigo,array){
        for(let item of array){
            if(item.codigo===codigo)
            return item;
        }
return null;
    }
}
const catalogo=[{codigo:"codigo1",nombre:"producto1",precio:2.0},
                {codigo:"codigo2",nombre:"producto2",precio:3.0}];
        

    const micarrito=new carrito(catalogo);
    micarrito.add("codigo1",10);

