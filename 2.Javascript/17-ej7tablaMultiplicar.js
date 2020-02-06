'use strict'

/*

	Ejercicio #7

	Tabla de multiplicar de un numero ntroducido por el usuario
	
*/

var n;

n = parseInt(prompt("Introduce un numero para imprimir la tabla de multiplicar:"))

while(isNaN(n) || n<=0){
	n = parseInt(prompt("Introduce un numero valido, no se permiten caracteres incorrectos!"));
}

for(var i=1;i<=10;i++){
	document.write("<p>"+n+" * "+i+" = "+(n*i)+"</p>");
}