'use strict'

/*
	En este archivo tratare de implementar las funciones anonimas y los Callbacks.

		Las funciones anonimas son funciones que no tienen un nombre, son guardadas dentro de una variable.
		llamandolas con el nombre de la variable...
*/

var msj = function(nombre){
	document.write("Hola, soy una función Anonima, y tu eres: "+nombre);
};

msj("Joel</br>");


/*
		Los callbacks 'llamadas de vuelta'.
		Es una funcion que recibe a otra funcion.
*/

function suma(n1,n2,mostrar,sumaPorDos){
	let sumar = n1+n2;

	mostrar(sumar);
	sumaPorDos(sumar*2);

	return sumar;
}

suma(7,3, function(dato){
	document.write("<p>La suma es: "+dato+"</p>");
},function(dato){
	document.write("<p>La suma por dos es: "+dato+"</p>");
});