// Chiedo all'utente di scegliere pari o dispari 
const evenOdd = prompt('Scegli pari o dispari');
let validChoice = false;


if(evenOdd === 'pari' || evenOdd === 'dispari'){
    validChoice = true;
    console.log(`hai scelto ${evenOdd}`);
}

console.log(validChoice);

// Chiedo all'utente di scegliere un numero da 1 a 5 
const nUser = parseInt(prompt('inserisci un numero da 1 a 5'));
if (nUser > 5 || nUser < 0) {
    console.log('messaggio di errore');
}

// Creo la funzione per generare il numero del PC 
function generateNum(min, max){
    let risultato = (Math.floor((Math.random() * max ) + min));

    return risultato;

}

// Creo la costante utilizzando la funzione 
const nPC = generateNum(1, 5);
console.log(`il numero del pc è ${nPC}`);
console.log(nPC);
const total = nUser + nPC;
console.log(`il totale è ${total}`);

if (total % 2) {
    console.log('il risultato è dispari');
} else{
    console.log('il risultato è pari');
}

// Creo la funzione per determinare il vincitore 
function vincitore(res){
    
    let winner = 'hai perso';
    let pariDispari;
    if (total % 2) {
        pariDispari = 'dispari';
        
    } else{
        pariDispari = 'pari';
    }

    if(pariDispari === res){
        winner = 'hai vinto';
    }

    return winner;
}

// Determino la costante per dichiarare il vincitore 
const win = vincitore(evenOdd);

console.log(`questo è il risultato: ${win}`);

// Chiedo all'utente di scrivere una parola 
const isPalindrome = prompt('scrivi una parola e ti dirò se è palindroma');
console.log(isPalindrome);

function checkPalindrome(word) {
    // determino la lunghezza della parola
    const len = word.length;
    let conclusion;
    // creo un ciclo dividendo la parola a metà
    for (let i = 0; i < len / 2; i++) {
      // controllo ogni uguaglianza tra la prima lettera e l'ultima
     // se l'if è diverso non è un palindromo, altrimenti lo è
      if (word[i] !== word[len - 1 - i]) {
          conclusion = 'non è un palindromo';
      }else {
        conclusion = 'è un palindromo';
    }
    }

    return conclusion;
    
  }

const result = checkPalindrome(isPalindrome);
console.log(result);















