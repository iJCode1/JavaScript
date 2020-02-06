'use strict'

/*

	Ejercicio #4

	// Mostrar todos los numeros impares entre dos numeros que introduce el usuario

*/

var n1,n2;


n1 = parseInt(prompt("Ingresa el numero 1:"));
n2 = parseInt(prompt("Ingresa el numero 2:"));

while((isNaN(n1) || isNaN(n2)) || (n1>n2)){
	alert("Solo puedes ingresar valores numericos, no se permiten letras o simbolos, y el primer numero debe ser menor al segundo");
	n1 = parseInt(prompt("Ingresa el numero 1:"));
	n2 = parseInt(prompt("Ingresa el numero 2:"));
}


document.write("<h4>Los numeros impares entre: "+n1+" y "+n2+" son:</h4>")

for(var i=n1;i<=n2;i++){
	if(i%2!=0){
		document.write("<h3>"+i+"</h3>")
	}
}