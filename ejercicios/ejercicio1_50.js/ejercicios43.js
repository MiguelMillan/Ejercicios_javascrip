/* Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la 
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla” */


let hora = 0;
let min =0;
let seg =0;

setInterval (reloj,1000);


 setInterval (() => {
     console.clear();
     if (seg===59) {
       seg = 0;
        if (min===59) {
             min = 0;
             if (hora === 23) {
                hora = 0;
             } else {
                hora++;
             }
        } else {
            min++;
        }
     } else {
         seg++;
    }
     console.log(`${hora}:${min}:${seg}`);
 },1000);
 

/* function reloj (){
    console.clear();
    if (seg===59) {
        seg = 0;
        if (min===59) {
            min = 0;
            if (hora === 23) {
                hora = 0;
            } else {
                hora++;
            }
        } else {
            min++;
        }
    } else {
        seg++;
    }
    console.log(`${hora}:${min}:${seg}`) */;