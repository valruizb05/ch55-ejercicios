const username = prompt("Ingresa tu nombre de usuario?");
const age = prompt("Ahora ingresa tu edad");
let counter = 0;

const topmovies = [];

alert("A continuación ingresaras tu top 5 de películas favoritas");

//!cada que se le pida al usuario ingresar algo se usa push
//?Pedir peliculas
for(let i = 1 ; i <= 5 ; i++ ){
    topmovies.push(prompt(`Ingresa la película número ${i}`));
}
console.log(`Hola soy ${username} tengo ${age} años y mis películas
    favoritas son`);

//!while dos partes importantes 
while(counter < topmovies.length){
    console.log(`Mi pelicula favorita número ${counter + 1} es; ${topmovies[counter]}`);
    counter++;
}