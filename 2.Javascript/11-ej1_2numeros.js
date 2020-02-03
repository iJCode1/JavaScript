'use strict'

/*
	Pedir 2 numeros al Usuarios
	Mostrar que numero es mayor, menor y si son iguales
*/

var n1,n2;

n1 = prompt("Ingresa el valor del Numero1:");
n2 = prompt("Ingresa el valor del Numero2:");

document.write("Los numeros son:<br/>Numero1: "+n1+"<br/>Numero2:"+n2+"<br/>");

if(n1>n2){
	document.write(n1+" es mayor que "+n2);
}else if(n1<n2){
	document.write(n1+" es menor que "+n2);
}else{
	document.write("Ambos numeros soon iguales... valor= "+n1);
}