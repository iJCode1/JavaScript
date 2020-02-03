'use strict'

/*
	Uso de Alertas y ventanas en JavaScript
*/

// alert: Muestra una alerta en JS

alert("Hola Mundo");

// confirm: Muestra una ventana para continuar o cancelar el proceso (true o false)

var con;

con = confirm("Desea continuar con la pagina?: ");

if(con==true){
	document.write("Has elegido aceptar!");
}else{
	document.write("Has elegido cancelar!");
}

// prumpt: Sirve para pedirle datos al usuario mediante una ventana

var edad = prompt("Ingresa tu edad:",18)
document.write("<br/>Tu edad es: "+edad);