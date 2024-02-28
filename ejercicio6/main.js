/*Crear una función que reciba un array por parámetro e imprima 
por consola todos los valores de ese array.*/


 function printArrayElements(array){
    array.forEach((element) => {
        console.log(element)        
    });
 }
 const myArray = ["hola", 42, true];
 printArrayElements(myArray)

