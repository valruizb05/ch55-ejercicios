/*Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`..*/ 

function arrayMultiplos(number, length) {
  let result = [];                    // Se crea un arreglo vacío
  for (let i = 1; i <= length; i++) { 
    result.push(number * i);         // Se agrega el múltiplo al arreglo
  }
  return result;                      // Se devuelve el arreglo final
}

console.log(arrayMultiplos(2, 5)); 