'use strict'

/*

	Parametros Rest & Spread

	Se utilizan los ... (3 puntos) para hacer alusion a los datos extras que puede que al momento de invocar
	una función se manden.

*/

//Trabajando con el parametro rest

function listado(name1,name2, ...frutas){
	document.write("<p>Name 1: "+name1+"</p>");
	document.write("<p>Name 2: "+name2+"</p>");
		document.write(frutas);
	
}

listado("Manzana","Naranja","Carne");


//Trabajando con el parametro spread

var comida = ["Pina","Pera"];
listado(...comida,"Manzana amarilla","Limon","Uva");