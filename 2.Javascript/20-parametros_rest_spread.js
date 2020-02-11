'use strict'

/*

	Parametros Rest & Spread

	Se utilizan los ... (3 puntos) para hacer alusion a los datos extras que puede que al momento de invocar
	una función se manden.

*/

//Trabajando con el parametro rest

/*function listado(name1,name2, ...frutas){
	document.write("<p>Name 1: "+name1+"</p>");
	document.write("<p>Name 2: "+name2+"</p>");
		document.write(frutas);
	
}

listado("Manzana","Naranja","Carne");


//Trabajando con el parametro spread

var comida = ["Pina","Pera"];
listado(...comida,"Manzana amarilla","Limon","Uva");
*/


// Segundo Repaso y Segundo Comodin para subir mi commit... Perdon Joel del Futuro. No me he organizdo para poder estudiar 10/02/2020

	
	//Parametros Rest & Spread

function alumnos(name1,name2,name3,name4,...nameExtra){
	document.write("<p>Student 1: "+name1+"</p>");
	document.write("<p>Student 2: "+name2+"</p>");
	document.write("<p>Student 3: "+name3+"</p>");
	document.write("<p>Student 4 : "+name4+"</p>");
	document.write("<p>"+nameExtra+"</p>");
}

function edades(age1,age2,age3,age4,...ageExtras){
	document.write("<p>Age's 1: "+age1+"</p>");
	document.write("<p>Age's 2: "+age2+"</p>");
	document.write("<p>Age's 3: "+age3+"</p>");
	document.write("<p>Age's 4: "+age4+"</p>");
	document.write("<p>"+ageExtras+"</p>");
}

alumnos("Joel","Julieta","Sonia","Carlos","Oscar","Victor");

document.write("<br></br>");

var ages = [20,20,24,18,23,24];

edades(...ages,56,32,15,36,21);

