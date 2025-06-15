/** Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/


function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const entrada = prompt("Escribe un número entero mayor o igual a 1:");
const numero = parseInt(entrada);

if (numero >= 1) {
  const resultado = factorial(numero);
  alert(`El factorial de ${numero} es ${resultado}`);
} else {
  alert("Por favor ingresa un número válido mayor o igual a 1.");
}
