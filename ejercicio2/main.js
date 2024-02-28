/*Crear una función que reciba dos números por parámetro e 
indique en consola que número es mayor, y si ninguno lo es, 
indicar por consola que son iguales.*/

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} es mayor que ${num2}.`)
//     } else if (num1 < num2) {
//         console.log(`${num1} es menor que ${num2}.`)
//     } else {
//         console.log(`Los dos numeros son iguales`)
//     }
// }
// compareNumbers(4, 20);
// compareNumbers(20, 5);
// compareNumbers(2, 2)


function compareNumbers() {
    let num1 = parseInt(prompt("Ingresa el primer número"));
    let num2 = parseInt(prompt("Ingresa el segundo número"));

    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}.`)
    } else if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}.`)
    } else {
        console.log(`Los dos numeros son iguales`)
    }
}
compareNumbers();