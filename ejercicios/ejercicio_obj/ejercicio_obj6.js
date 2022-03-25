function filter(array,callback){
    const resul=[];
    for(let i=0, max=array.length;i<max; i++){
        if(callback (array[i],i,array)){
            resul.push(array[i]);
        }
    }
    return resul;
}
function callback (iten){
    return (iten>5);
}
const miarray=[1,3,5,2,8]; 
const filtro =filter(miarray,callback);
console.log(filtro);


Array.prototype.filtro = function (callback) {
    const result = [];
    for (let i=0, max=this.length; i<max; i++) {
        if (callback (this[i],i,this)) {
            result.push(this[i]);
        }
    }
    return result; 
}
Array.prototype.encuentraIndice = function (callback) {
    for (let i=0, max=this.length; i<max; i++) {
        if (callback (this[i],i,this)) {
            return i;       
        }
    }
    return -1;
}
function callback (item) {
    return (item>'i');
}
const Miarray = ['a','b','x','x','m','h'];
console.log (miarray.filtro(callback));
console.log (miarray.filtro(function (item) {
    return item > 'i';
}));
console.log (miarray.filtro(item=>item>'i'));
