'use strict'

/*
    Esto solo es un repaso por los parametros rest y spread
    Ademas de comodin para subir un cambio a GitHub jajaja
*/

var pregunta = confirm("Deseas seguir en la Pagina?");
var frutas = ["Manzana","Uva"];

if(pregunta==true){
    alert("Genial!, veamos el resultado de los Parametros Rest y Spread!");
    Listado("Joel","Julieta","Keyla","Sonia");
    document.write("<hr/>");
    listadoSpread(...frutas,"Pera","Platano");
}else if(pregunta==false){
    alert("Lamento que no quieras seguir en la pagina...");
}

function Listado(name1,name2,...resto){
    document.write("<p>Name 1: "+name1+"</p>");
    document.write("<p>Name 2: "+name2+"</p>");
    document.write("<p>"+resto+"</p>");
}

function listadoSpread(name1,name2,...resto){
    document.write("<p>Name 1: "+name1+"</p>");
    document.write("<p>Name 2: "+name2+"</p>");
    document.write("<p>"+resto+"</p>");
}
