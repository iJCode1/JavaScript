'use strict'

/*
	En esta clase trabajare con el arreglo ForEach en JS.
	la funcion .foreach nos servira para recorrer ub arreglo y poder mostrar sus elementos del mismo.
	Editado desde GitHub
*/

var names = ["Joel","Julieta","Alazkin","Keyla","Marisela"];

document.write("<ol>");
names.forEach((i)=>{
document.write("<li>"+i+"</li>");
});
document.write("</ol>");
