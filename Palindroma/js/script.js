// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Dimmi una parola');

let polindromo = checkWordPalindroma(userWord);

alert(polindromo);

// Creo un ciclo for per leggere la parola all'incontrario
function checkWordPalindroma(userWord) {

    let reverseWord = ''

    for ( let i = userWord.length -1; i >= 0; i--) {
        
        reverseWord += userWord[i];
        
    }
    
    let ifIsPolindromo;

    if ( userWord === reverseWord ) {
        ifIsPolindromo = 'E un polindromo';
    } else {
        ifIsPolindromo = 'Non è un polindromo';
    }
    
    return ifIsPolindromo;
}
// Faccio un confronto alla parola data dall'utente e quella letta all'incontrario
// output per emmettere il risultato
