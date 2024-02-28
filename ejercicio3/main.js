/* Crear una función que reciba un número por parámetro e indique 
en consola si ese número es múltiplo de 5. */

// function checkMultiple(number){
//     if (number % 5 === 0){
//         console.log(`${number} es multiplo de 5`)
//     } else {
//         console.log(`${number} no es múltiplo de 5.`);
//     }

// }
// checkMultiple(5);
// checkMultiple(2);


function checkMultiple(){
    let number = prompt("Ingresa un numero");

    if (number % 5 === 0){
        console.log(`${number} es multiplo de 5`)
    } else {
        console.log(`${number} no es múltiplo de 5.`);
    }
}
checkMultiple()
