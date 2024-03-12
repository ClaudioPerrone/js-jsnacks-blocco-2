/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//INPUT DATI
//Inserire tramire prompt due parole
const firstWord = (prompt("Inserisci una parola"));
const secondWord = (prompt("Inserisci un'altra parola"));

//ELABORAZIONE DATI
let result;
//Se la prima parola è più lunga della seconda, stampa prima la prima e poi la seconda
if (firstWord.length > secondWord.length) {
    result = `${firstWord} ${secondWord}`;
//Se la seconda parola è più lunga, stampa prima la seconda
} else {
    result = `${secondWord} ${firstWord}`;
}
//OUTPUT DATI
console.log(result);