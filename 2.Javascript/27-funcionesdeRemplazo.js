'use strict'

/*
	Funciones de Reemplazo en Javascript

	-replace : Reemplaza una palbra por otra
	-slice : Devuelve la cadena a partir del rango indicado
	-split : 
	-trim : Quita los espacios antes y despues de una cadena o de una secuencia de palabras
*/

var text = "Hello World, My name is Joel. I'm From Mexico. Mexican = Mexican"
var msg;
document.write("<p>Text Originally: "+text+"</p>");

	// replace : Solo cambia la Primera Palabra encontrada

msg = text.replace("Mexican","Mexico");
document.write("<p>.replace: "+msg+"</p>");

	// slice : 

msg = text.slice(6,29);
document.write("<p>.slice: "+msg+"</p>");

	// Split :

msg = text.split(" ");
document.write("<p>.split: "+msg+"</p>");
console.log(msg);

	// trim:

var text2 = "  Este es un Parrafo con Espacios al Inicio y al Final del mismo   ";
document.write("<p>Text 2: "+text2+"</p>");
console.log(text2);

msg = text2.trim();
document.write("<p>.trim: "+msg+"</p>");
console.log(msg);