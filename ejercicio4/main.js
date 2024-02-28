/*Crear una función que reciba un número por parámetro e imprima 
por consola todos los números desde el 0 hasta llegar a ese número.*/
// function printNumbersUpTo(number){
//     for (let i = 0; i <= number; i++) {
//         console.log(i);
//     }
// }
// printNumbersUpTo(20)

function printNumbersUpTo(){

    let number = prompt ("ingresa un numero")
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}
printNumbersUpTo()