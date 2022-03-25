function linea(descripcion,cantidad,precio){
    this.descripcion=descripcion;
    this.cantidad=cantidad;
    this.precio=precio;
}
function clientes(nombre,direccion,telefono,nif){
    this.nombre=nombre;
    this.direccion=direccion;
    this.telefono=telefono;
    this.nif=nif
    }

function factura(clientes,elementos){
    this.clientes=clientes;
    this.elementos=elementos;
    this.base=0;
    this.iva=0.21;
    this.fpago="contado";
    this.total=function(){
        this.base
        let suma=0;
        for(let item of elementos){
           this.base+=item.cantidad*item.precio;
        }
        return this.base*(1+iva);
    }
 }

let cliente1=new cliente ();
let factura1 =new factura (clientes,[]);
let factura2 =new factura (clientes,[]);