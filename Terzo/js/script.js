/* 
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

//INPUT DATI
const red = document.querySelector("#rosso");
red.style.color = "red";
const green = document.querySelector("#verde");
green.style.color = "green";

//ELABORAZIONE DATI
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++){
    const thisNumber = numbers[i];
    if (thisNumber % 2 === 0){
        green.innerHTML += thisNumber;
    } else if (thisNumber % 2 !== 0){
        red.innerHTML += thisNumber;
    }
}