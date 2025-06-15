/* User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

1.Username, edad y una lista de peliculas favoritas
2. Utilizar los prompt necesarios para que el usuario ingrese inf
3. Ocupando un array vamos a almacenar las peliculas del usuario
4. Mostrar la inf en la consola 

n. Mostrar en consola la inf del usuario, donde cada pelicula debe tener un msj como este 
The film {film} is one of my favorite */


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