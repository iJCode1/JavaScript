'use strict'

/*
	Veremos como poder recorrer un Array en JavaScript
*/

var Languages = ["Javscript", "PHP", "GO", "Java", "C", "C++"];

// Mostrar todos los elementos que tiene el arreglo.

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");

for(var i=0; i<Languages.length;i++){
	document.write(`<li>${Languages[i]}</li>`);
}
document.write("</ul>");

// Pediremos al Usuario el indice del valor que deaea imprimir.

var indice = parseInt(prompt("Introduce el indice del valor del arreglo a mostrar:"));

if(indice <0 || indice>=Languages.length || isNaN(indice)){
	alert(`Indice no valido, ingrese un indice mayor o igual a 0 y menor a ${Languages.length}`);
}else{
	alert(`Valor en el indice ${indice}: ${Languages[indice]}`);
}