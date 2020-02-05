'use strict'

/*
	// Ejercicio #3

	Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

*/

var n1,n2;

n1 = parseInt(prompt("Ingrese el primer numero (inicio):"));
n2 = parseInt(prompt("Ingrese el segundo numero (final):"));

if((!isNaN(n1) && !isNaN(n2)) && (n1<n2)){
	document.write("<h3>Los numeros son:</h3>Numero 1: "+n1+"</br>Numero 2: "+n2+"</br>");

	for(var i=n1;i<=n2;i++){
		document.write(i+"</br>");
	}
}else{
	document.write("Ambos valores deben ser numericos! o numero 1 menor a numero 2 ");
}

