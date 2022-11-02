// Dichiariamo chi ha vinto.

/*------------------------
    FUNCTIONS
--------------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(number) {
    if( number % 2 === 0 ) {
        return true;
    }
    return false;
}

/*------------------------
    MAIN
--------------------------*/
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Inserisci pari o dispari");
const userNumber = Number( prompt("Inserisci un numero fra 1 e 5") );
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = getRndInteger(1, 5);
// Sommiamo i due numeri
const total = userNumber + cpuNumber;
console.log(total);
// Stabiliamo SE la somma dei due numeri è pari o dispari (usando una funzione)
if( ( userChoice === "pari" && isEven(total) ) || ( userChoice === "dispari" && !isEven(total) ) ) {
    console.log("L'utente ha vinto")
} else {
    console.log("Ha vinto la CPU 🤖");
}