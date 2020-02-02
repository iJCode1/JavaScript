'use strict'

//Condicionales en JS

//Condicional IF, Else if, Else

var edad = 20;
var nombre = "Joel";

if(edad>0 && edad <=15){
	document.write(nombre+' Tienes: '+edad+" años. Rango (1-15)");
}else if(edad>15 && edad <=17){
	document.write(nombre+' Tienes: '+edad+" años. Rango (16-17)")
	if(edad==17){
		document.write(", Tienes exactamente 17 años....");
	}
}else if(edad==18){
	document.write(nombre+' Tienes: '+edad+" años. Rango (18)");
}else{
	document.write(nombre+" Tienes 19 o mas años!!!");
}