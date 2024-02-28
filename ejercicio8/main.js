/*Crea una función que reciba un array de números y un número 
por parámetro e imprima por consola cada número del array 
multiplicado por el número pasado por parámetro.*/

function multiplyArray(array, number){

    array.forEach((elemento) => {
        console.log(elemento * number);
    });
}
const myArray = [1, 2, 3, 4, 5];
multiplyArray(myArray, 2);