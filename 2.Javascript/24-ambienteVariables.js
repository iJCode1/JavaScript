'use strict'

/*
	Es muy importante entender que existen variables globales: Son las que se declaran afuera de las Funciones.
	y estas son accesibles en cualquier lugar.

	Y las variables que estan dentro de una funcion, son variables que unicamente se puedes utilizar dentro de la funcion.

*/

var global = "Hello World"; //Variable Global

function message(){
	var name = "Joel";
	document.write("<p>Message: "+global+"</p>"); // Se hace uso de la variable Global.
	document.write("<p>Name: "+name+"</p>"); // Se hace uso de la variable que esta dentro a la Funcion.
}

message();
document.write("<p>La variable Global dice: "+global+"</p>"); // Se utiliza la variable global una ves mas
//document.write("La variable de la Funcion dice: "+name); // Se intenta utilizar la variable que se declaro dentro de la Funcion... Pero esto es erroneo debido a que no se puede utilizar dicha variable.