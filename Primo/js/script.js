/* 
- L'utente inserisce un numero nel prompt,
- se è pari stampa il numero,
- se è dispari stampa il numero successivo
*/

//INPUT DATI
//L'utente inserisce un numero
const number = parseInt(prompt("Inserisci un numero"));

//ELABORAZIONE DATI
let oddOrEven;
//Se il numero è pari viene stampato
if (number % 2 === 0){
    oddOrEven = number;
    //Se il numero è dispari viene stampato il numero successivo
} else {
    oddOrEven = number + 1;
}

//OUTPUT DATI
console.log(oddOrEven);