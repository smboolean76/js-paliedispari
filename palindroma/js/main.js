// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
    let wordReverse = "";
    for( let i = word.length - 1; i >= 0; i-- ) {
        wordReverse += word[i];
    }
    if( word.toLowerCase() === wordReverse.toLowerCase() ) {
        return true;
    }
    return false;
}

// test
console.log("Asserisco che passando come parametro Anna la funzione restituisca true", isPalindrome("Anna"));
console.log("Asserisco che passando come parametro Ciao la funzione restituisca false", isPalindrome("Ciao"));
