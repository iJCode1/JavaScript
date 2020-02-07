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

//Extra: Todas las tablas de multiplicar del 1 al 10.

for(var i=1;i<=10;i++){
	document.write("<h2>Tabla del Numero: "+i+"</h2>");
	for(var j=1;j<=10;j++){
		document.write("<p>"+i+" * "+j+" = "+(i*j)+"</p>");
	}
}