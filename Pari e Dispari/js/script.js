// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente pari o dispari
let userOddOrEven = prompt('Pari o Dispari?');
console.log('Pari o Dispari ' + userOddOrEven)
// Chiedo all'utente un numero tra 1 e 5
let userNumber = parseInt(prompt('Scegli un numero tra 1 a 5'));
console.log('utente ' + userNumber);

// Variabile numero random Computer
let computerRandomNumber = randomNumberPc();
console.log('PC ' + computerRandomNumber);
// Chiamo la funzione


// Genero un numero random con la funzione
function randomNumberPc () {
    let randomNumber = Math.floor(Math.random() * 5 + 1)

    return randomNumber;
}

// Sommo i 2 numeri
let sumNumber = userNumber + computerRandomNumber;
console.log('Somma ' + sumNumber);

// Variabile se è pari o dispari
let evenOrOdd = checkEvenOrOdd(sumNumber);

// Verifico se un numero è dispari o pari
function checkEvenOrOdd(result) {
    if (result % 2 === 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}

// Comparo la scelta dell'utente
if ( userOddOrEven === evenOrOdd) {
    alert('Hai vinto');
} else {
    alert('Ha vinto il computer');
}

// output risultato, chi ha vinto
