'use strict'

/*
	Ejercicio #5

	Mostrar todos los numeros divisores de un numero que se introduce en prompt

*/

var num;

num = parseInt(prompt("Ingrese un numero: "));

while(isNaN(num)){
	num = parseInt(prompt("Introduzca solo un dato numerico: "));
}

for(var i=0;i<=num;i++){
	if(num%i==0){
		document.write("<p>El numero: "+i+" es divisor de: "+num+"</p>");
	}
}