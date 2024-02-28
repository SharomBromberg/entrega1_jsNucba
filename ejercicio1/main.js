/*Crear una función que reciba un número por parámetro e indique 
en consola si el número es par o impar. JavaScript */

// function verifyEvenOdd(number) {
//     if(number% 2 === 0) {
//         console.log(` ${number} es un número par.`);
//     } else {
//         console.log(` ${number} es un número impar.`);
//     }
// }
// verifyEvenOdd(3); 
// verifyEvenOdd(10);

// con un prompt

function verifyEvenOdd() {
    let number = prompt("Ingresa un número:");

    if (isNaN(number)) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }

    if (number % 2 === 0) {
        console.log(` ${number} es un número par.`);
    } else {
        console.log(` ${number} es un número impar.`);
    }
}
verifyEvenOdd();

