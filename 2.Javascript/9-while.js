'use strict'

/*
    // Bucle While en JavaScript
*/

var years=20;
var i=1;

while(i<=years){
    document.write("El año es: "+i+"<br/>");
    i++;
}

/*
    // Bucle Do While en JavaScript
*/

document.write("<hr/>")

var yearU = 2017;
var year = new Date();
var año = year.getFullYear();
document.write("<h3>Fecha del Sistema: "+año+"</h3>");
do{
    document.write("La fecha es: "+yearU+"<br/>");
    yearU++;
}while(yearU<=año);