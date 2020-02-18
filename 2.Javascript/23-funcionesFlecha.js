'use strict'

/*
	Funciones Flecha!

	Una funcion flecha nos sirve principalmente para ahorrar la estructura de una funcion.
	Declaramos una variable donde se guardara el resultado de la funcion que queramos.
*/

	//Repaso de Funciones Flecha!

/*

var nameV = (nameP,edad) =>
	document.write("Name is: "+nameP+" Tiene "+edad+" años.");


nameV("Joel",20);

*/

	//Repaso de Funciones Flecha pero con Callbacks. y editado en Github

function cal(n1,n2,suma){
	document.write("<p>Number 1: "+n1+"</p>");
	document.write("<p>Number 2: "+n2+"</p>");
	suma(n1+n2);
}

cal(7,2,(dato)=> document.write("<p>Suma: "+dato+"</p>"));
