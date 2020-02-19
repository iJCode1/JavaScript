'use strict'

/*
	Plantillas en JavaScript

	En esta clase trabajare con las platillas en JavaScript, en concreto para concatenar mensajes sin utilizar el operador +
*/

var name = "Joel";
var age = 20;

var msg = "El nombre es: "+name+", la edad es: "+age;

document.write("<p>Utilizando concatenacion normal... El mensaje es: "+msg+"</p>");

var msg2 = `El nombre es ${name} y la edad es: ${age}`;
document.write("<p>Ytilizando ${}"+msg2+"</p>");