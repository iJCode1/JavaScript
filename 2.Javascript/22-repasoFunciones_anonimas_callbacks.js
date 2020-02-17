'use strict'

/*
	Repaso de las funciones Anonimas y Callbacks.

	// Una funcion anonima es una funcion que no suele tener un nombre, mas bien se declara dentro de una variable.
*/

/*
var nameV = function(name){
	document.write("<p>Name is: "+name+"</p>")
};

nameV("Joel");
*/

/*
	Tambien tenemos los callbacks que no es mas que una llamada a una funcion dentro de otra.
*/

/*

function calcu(n1,n2,sum,resta,mult,div){
	document.write("<p>Number 1: "+n1+"</p>");
	document.write("<p>Number 2: "+n2+"</p>");
	sum(n1+n2);
	resta(n1-n2);
	mult(n1*n2);
	div(n1/n2);
}

calcu(7,3,function(dato){
	document.write("<p>La suma es: "+dato+"</p>");
},function(dato){
	document.write("<p>La resta es: "+dato+"</p>");
},function(dato){
	document.write("<p>La multiplicación es: "+dato+"</p>");
},function(dato){
	document.write("<p>La división es: "+dato+"</p>");
});

*/


	// Repaso de Funciones Anonimas y Callbacks....

//Funcion Anonima

var funcionA = function(name,age){
	document.write("<p>Name is: "+name+"</p>");
	document.write("<p>Age is: "+age+" years.</p>");
}

funcionA("Joel",20);

//Callbacks

function calcu(n1,n2,suma,resta){
	document.write("<p>Number 1: "+n1+"</p>");
	document.write("<p>Number 2: "+n2+"</p>");
	suma(n1+n2);
	resta(n1-n2);
}

calcu(7,2,function(dato){
	document.write("<p>La suma es: "+dato+"</p>");
},function(dato){
	document.write("<p>La resta es: "+dato+"</p>");
});