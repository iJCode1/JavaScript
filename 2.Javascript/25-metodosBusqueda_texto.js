'use strict'

/*
	En esta clase utilizare algunas funciones de los Textos
	Las cuales nos permiten hacer una acción en concreto.
*/

var number1 = 77;
var text1 = "Hello World";
var texto2 = "I'm Joel";
var msg;

	// Cancatrenar Texto.

msg = text1.concat(" "+texto2);

document.write("<p>Concatenación de Textos: "+msg+"</p>");

	// Pasar texto a Mayusculas

msg = text1.toUpperCase();
document.write("<p>Texto 1 en Mayusculas con toUpperCase: "+msg+"</p>");

	// Pasar Texto en Minusculas

msg = text1.toLowerCase();
document.write("<p>Texto 1 en Minusculas con toLowerCase: "+msg+"</p>");

	// Tamaño de una Cadena

msg = text1.length;
document.write("<p>Tamaño del Texto 1 con .lenght: "+msg+"</p>");

	// Pasar un numero a un String

document.write("<p>Number 1 "+number1+" is: "+ typeof (number1) +"</p>");
document.write("<p>Number 1 "+number1+" is: "+ typeof (number1.toString()) +" Con .toString</p>");