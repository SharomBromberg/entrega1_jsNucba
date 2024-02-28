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

// function verifyEvenOdd() {
//     let number = prompt("Ingresa un número:");

//     if (isNaN(number)) {
//         console.log("Por favor, ingresa un número válido.");
//         return;
//     }

//     if (number % 2 === 0) {
//         console.log(` ${number} es un número par.`);
//     } else {
//         console.log(` ${number} es un número impar.`);
//     }
// }
// verifyEvenOdd();

/*-----------------------------------------------------------------------------------------------------------------*/


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


// function compareNumbers() {
//     let num1 = parseInt(prompt("Ingresa el primer número"));
//     let num2 = parseInt(prompt("Ingresa el segundo número"));

//     if (num1 > num2) {
//         console.log(`${num1} es mayor que ${num2}.`)
//     } else if (num1 < num2) {
//         console.log(`${num1} es menor que ${num2}.`)
//     } else {
//         console.log(`Los dos numeros son iguales`)
//     }
// }
// compareNumbers();

/*-----------------------------------------------------------------------------------------------------------------*/
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


// function checkMultiple(){
//     let number = prompt("Ingresa un numero");

//     if (number % 5 === 0){
//         console.log(`${number} es multiplo de 5`)
//     } else {
//         console.log(`${number} no es múltiplo de 5.`);
//     }
// }
// checkMultiple()

/*-----------------------------------------------------------------------------------------------------------------*/

/*Crear una función que reciba un número por parámetro e imprima 
por consola todos los números desde el 0 hasta llegar a ese número.*/
// function printNumbersUpTo(number){
//     for (let i = 0; i <= number; i++) {
//         console.log(i);
//     }
// }
// printNumbersUpTo(20)

// function printNumbersUpTo(){

//     let number = prompt ("ingresa un numero")
//     for (let i = 0; i <= number; i++) {
//         console.log(i);
//     }
// }
// printNumbersUpTo()

/*-----------------------------------------------------------------------------------------------------------------*/


/*Crear una función que reciba una palabra 
y un número por parámetro e imprima por consola  
esa palabra la cantidad correspondiente al número indicado.*/

// function printWordAmount(word, amount){

//         for (let i = 0; i < amount; i++) {
//         console.log(word);
//     }
// }
// printWordAmount ("hola",2)


// function printWordAmount(){
//     let word = prompt("Ingresa una palabra:");
//     let amount = parseInt(prompt("Ingresa un número:"));

//     if (isNaN(amount)) {
//         console.log("Por favor, ingresa un número válido.");
//         return;
//     }

//     for (let i = 0; i < amount; i++) {
//     console.log(word);
// }
// }
// printWordAmount ()


/*-----------------------------------------------------------------------------------------------------------------*/


/*Crear una función que reciba un array por parámetro e imprima 
por consola todos los valores de ese array.*/


//  function printArrayElements(array){
//     array.forEach((element) => {
//         console.log(element)        
//     });
//  }
//  const myArray = ["hola", 42, true];
//  printArrayElements(myArray)

/*-----------------------------------------------------------------------------------------------------------------*/

/*Crear una función que reciba un array con 10 números e imprima 
por consola todos los valores de ese array, menos el que se 
encuentre en la 5ta posición del mismo*/
 
// function printArrayWithoutFifthElement(array){
//     for (let i = 0; i < array.length; i++) {
//         if (i !== 4) { // La quinta posición tiene índice 4
//             console.log(array[i]);
//         }
//     }
//  }
//  const miArray = [1, 2, 5, 4, 7, 1, 4, 8, 2, 9];

//  printArrayWithoutFifthElement(miArray);


/*-----------------------------------------------------------------------------------------------------------------*/
/*Crea una función que reciba un array de números y un número 
por parámetro e imprima por consola cada número del array 
multiplicado por el número pasado por parámetro.*/

// function multiplyArray(array, number){

//     array.forEach((elemento) => {
//         console.log(elemento * number);
//     });
// }
// const myArray = [1, 2, 3, 4, 5];
// multiplyArray(myArray, 2);