'use strict'

/*

	Ejercicio #6

	Indicar si un numero es Par o Impar
	1. Ventana Prompt
	2. Si no es valido que nos pida de nuevo el numero

*/

var numero;

numero = parseInt(prompt("Ingrese un numero: "));

while(isNaN(numero) || numero<0){
	numero = parseInt(prompt("Ingrese un numero valido: "));
}

if(numero%2==0){
	document.write("<p>El numero: "+numero+" es par</p>");
}else{
	document.write("<p>El numero: "+numero+" es impar</p>");
}