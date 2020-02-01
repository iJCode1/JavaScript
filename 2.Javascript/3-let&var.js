"use strict"

//Variables con Var & Let

//Var se utiliza al querer usar variables Globales
//Let es mas que nada para variables que le pertenecen a el bloqu de codigo en concreto


var nombre = "joel";
let año = 20;

console.log("Nombre antes del IF: "+ nombre);
console.log("Año antes del IF: "+año);

if(true){
    nombre = "joel2"
    let año = 21;
    console.log("Nombre en el IF: "+nombre);
    console.log("Año en el IF: "+año);
}

console.log("Nombre al final del Programa: "+nombre);
console.log("Año al final del Programa: "+año)

