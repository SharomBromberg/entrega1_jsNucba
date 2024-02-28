/*Crear una función que reciba un array con 10 números e 
imprima por consola todos los valores de ese array,
 menos el que se encuentre en la 5ta posición del mismo*/
 
function printArrayWithoutFifthElement(array){
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { // La quinta posición tiene índice 4
            console.log(array[i]);
        }
    }
 }
 const miArray = [1, 2, 5, 4, 7, 1, 4, 8, 2, 9];

 printArrayWithoutFifthElement(miArray);

