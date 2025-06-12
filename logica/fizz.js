/* Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

1. 100 números 
2. crear un bucle que recora 100 números
3. Si el número es múltiplo de 3, imprime "Fizz".
    3.1 Ocupar la expresióm número % 3
    3.2 Es verdadero si el modulo = 0
4. Si el número es múltiplo de 5, imprime "Buzz".
    4.1 Ocupar la expresion numero % 5
    4.2 Verdadero si el modulo = 0
5. Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
    5.1 Ocupar la expresion numero %3 y modulo % 5
    5.2 Es verdadero solo si ambas expresiones son iguales a 0
6. Si no es múltiplo de ninguno, imprime el número tal cual */

let counter = 1;

do{
    if(counter % 3 == 0 && counter % 5 == 0){
        console.log(`El número ${counter} es FizzBuzz`);
    }else if(counter % 3 == 0){
        console.log(`El numero  ${counter} es Fizz`);
    }else if(counter % 5 == 0){
        console.log(`El numero ${counter} es Buzz`);
    }else{
        console.log(counter);
    }
    counter++;
}while(counter <= 100)



