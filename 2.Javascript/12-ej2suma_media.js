'use strict'

/*
	Ejercicio 2:
	Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
	hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma=0,media=0,numero=0,contador=0;

/*

	//Propuesta con While

numero = parseFloat(prompt("Ingresa un numero: "));

while(numero>=0){
	suma+=numero;
	contador++;
	numero = parseFloat(prompt("Ingresa un numero: "));
}

if(contador>=1){
	media = suma/contador;
	document.write("La media es: "+media);
}else{
	document.write("No se puede hacer la media, debido a que no hubo numeros correctos");
}

*/

	//Propuesta con doWhile

do{
	numero = parseFloat(prompt("Ingresa un numero mayor o igual a 0:"));

	if(isNaN(numero) || numero <0){
		alert("No puedes introducir letras o valores menores a 0!");
	}else{
		contador++;
		suma+=numero;
	}
}while(numero>=0 || isNaN(numero));

if(contador>=1){
	media = suma/contador;
	document.write("La media es: "+media);
}else{
	document.write("No se puede hacer la media... no se digito ningun numero valido");
}