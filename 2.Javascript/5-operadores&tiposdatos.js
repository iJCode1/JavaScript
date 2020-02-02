'use strict'
// Operadores en JavaScript

var n1 = 7; 
var n2 = 3;

var suma,resta,mult,div,resto;

suma = n1+n2;
resta = n1-n2;
mult = n1*n2;
div = n1/n2;
resto = n1%n2;

console.log("Numero 1: "+n1+", Numero 2: "+n2);

console.log("La suma es: "+suma);
console.log("La resta es: "+resta);
console.log("La multiplicación es: "+mult);
console.log("La división es: "+div);
console.log("El resto es: "+resto);

// Tipos de Datos en JavaScript

var texto = "3";
var entero = 1;
var flotante = 3.56;
var booleano = true;

console.log(Number(texto)+1); //Convertir un numero 'String' a Numero
console.log(typeof(Number(texto)+1));
console.log(String(entero)+2); //Convertir un dato numerico a String
console.log(typeof(String(entero)+2));
//Tambien se puede usar parseInt o parseFloat para cambiar de tipo de dato
console.log(parseInt(flotante));
console.log(typeof(parseInt(flotante)));

console.log(typeof(booleano));

