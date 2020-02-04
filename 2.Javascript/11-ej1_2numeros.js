'use strict'

/*
	Pedir 2 numeros al Usuarios
	Mostrar que numero es mayor, menor y si son iguales
	Extra: Si los numeros no son un numero o son menores o igual a cero, volverlos a pedir
*/

	var n1,n2;

	n1 = parseInt(prompt("Ingresa el valor del Numero1:"));
	n2 = parseInt(prompt("Ingresa el valor del Numero2:"));

	while((n1<=0 || n2<=0) || (isNaN(n1) || isNaN(n2) )){
		n1 = parseInt(prompt("Ingresa el valor del Numero1:"));
		n2 = parseInt(prompt("Ingresa el valor del Numero2:"));
	}

	document.write("Los numeros son:<br/>Numero1: <b>"+n1+"</b><br/>Numero2: <b>"+n2+"</b><br/>");

	if(n1>n2){
		document.write(n1+" es mayor que "+n2);
	}else if(n1<n2){
		document.write(n1+" es menor que "+n2);
	}else if(n1==n2){
		document.write("Ambos numeros son iguales... valor= "+n1);
	}else{
		document.write("Introduzca valores numericos");
	}




