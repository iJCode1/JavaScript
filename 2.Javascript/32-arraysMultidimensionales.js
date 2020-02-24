'use strict'

/*
    En esta clase trabajare con arreglos multidimensionales en Javascript
    editado en GitHub el 23 de Febrero a las 11:17 pm
*/

var categories = ["Terror","Arte","Emocional","Tristeza"];
var movies = ["Matar a Todos","La Obra Perfecta","La felicidad toca tu puerta","Se Acabo"];

var cine = [categories,movies];

console.log(cine);

document.write("<p>"+cine[0][3]+"</p>");
document.write(`${cine[1][0]}`);
