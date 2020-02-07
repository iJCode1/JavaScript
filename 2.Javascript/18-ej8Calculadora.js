'use strict'

/*
	
	Ejercicio #8: Calculadora.

	-Pida dos numeros por pantalla.
	-Si metemos uno mal que nos los vuelva a pedir.
	-En el Cuerpo de la Pagina, en una alerta y por la consola el resultado de:
	Sumar, restar, mutiplicar y dividir esas 2 cifras.

*/

var n1,n2;

n1 = parseFloat(prompt("Ingrese un numero: "));
n2 = parseFloat(prompt("Ingrese un segundo numero: "));

while(isNaN(n1) || isNaN(n2)){
	alert("Ingrese valores numericos correctos!");
	n1 = parseFloat(prompt("Ingrese un numero: "));
	n2 = parseFloat(prompt("Ingrese un segundo numero: "));
}

var suma,resta,mult,div;

suma = n1+n2;
resta = n1-n2;
mult = n1*n2;
div = n1/n2;

document.write("Los numeros son: </br>Numero1: <b>"+n1+"</b></br>Numero2: <b>"+n2+"</b>");

document.write("<p>La Suma es: "+suma+"</p>");
document.write("<p>La Resta es: "+resta+"</p>");
document.write("<p>La Multiplicación es: "+mult+"</p>");
document.write("<p>La División es: "+div+"</p>");