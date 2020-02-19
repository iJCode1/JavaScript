/*
	En esta clase trabajare con Archivos de Busqueda en Javascript.
*/

var texto1 = "Hello World desde mi Computadora in the World 2.0";
var msg;

	// Busqueda dentro de un Texto...

	// .indexOf busca la palabra indicada, pero devuleve como resultado el indice donde la encontro.

msg = texto1.indexOf("World");
document.write("<p>.indexOf: "+msg+"</p>")

	// .search: De igual manera busca y devuelve el indice donde encontro la palabra.

msg = texto1.search("desde");
document.write("<p>.search: "+msg+"</p>");

	// .lastIndexOf: Muestra el indice donde se ubica la ultima palabra que se indico.

msg = texto1.lastIndexOf("World");
document.write("<p>.lastIndexOf: "+msg+"</p>");

	// .Match: 

msg = texto1.match("World");
document.write("<p>.match: "+msg+"</p>");

	// .substr: Devuelve la cadena que este a partir del rango indicado.

msg = texto1.substr(6);
document.write("<p>.substr: "+msg+"</p>");

	// .includes: Devuelve True o False dependiendo si encuentra la palabra indicada dentro de los ()

msg = texto1.includes("World");
document.write("<p>.includes: "+msg+"</p>");

	// .startsWith: Muestra un True o False si la cadena empieza con la palabra indicada

msg = texto1.startsWith("Hello");
document.write("<p>.startsWith: "+msg+"</p>");

	// .endWith: Devuelve true o false si la cadena termina con la palabra indicada

msg = texto1.endsWith("World");
document.write("<p>.endsWith: "+msg+"</p>");