/*Crear una función que reciba una palabra 
y un número por parámetro e imprima por consola  
esa palabra la cantidad correspondiente al número indicado.*/

// function printWordAmount(word, amount){

//         for (let i = 0; i < amount; i++) {
//         console.log(word);
//     }
// }
// printWordAmount ("hola",2)


function printWordAmount(){
    let word = prompt("Ingresa una palabra:");
    let amount = parseInt(prompt("Ingresa un número:"));

    if (isNaN(amount)) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }

    for (let i = 0; i < amount; i++) {
    console.log(word);
}
}
printWordAmount ()
