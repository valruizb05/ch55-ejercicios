/* 
1. Array de resistencias
2. Usando Math.abs obtener el valor absolution de los elementos del array
3. Reduce, usar ciclos para hacer la suma
4. Retornar un msj del tipo 15OHMS */

function sumOfResistors(resistorsArray){
    const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor));
    console.log(resistorsAbs);
    const totalResistance = resistorsAbs.reduce((total,current) => total + current, 0);
    return `${totalResistance} ohms`
}
console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));