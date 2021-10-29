// Chiedo all'utente di scegliere pari o dispari 
const pairOdd = prompt('Scegli pari o dispari');


if(pairOdd === 'pari' || pairOdd === 'dispari'){
    validChoice = true;
    console.log(`hai scelto ${pairOdd}`);
}

console.log(validChoice);

// Chiedo all'utente di scegliere un numero da 1 a 5 
const nUser = parseInt(prompt('inserisci un numero da 1 a 5'));
if (nUser > 5 || nUser < 0) {
    console.log('messaggio di errore');
}

// Creo la funzione per generare il numero del PC 
function generateNum(num){
    let risultato = (Math.floor((Math.random() * num ) + 1));

    return risultato;

}

// Creo la costante utilizzando la funzione 
const nPC = generateNum(5);
console.log(`il numero del pc è ${nPC}`);

const total = nUser + nPC;
console.log(`il totale è ${total}`);

if (total % 2) {
    console.log('il risultato è dispari');
} else{
    console.log('il risultato è pari');
}

// Creo la funzione per determinare il vincitore 
function vincitore(num){
    
    let winner = 'hai perso';
    let pariDispari;
    if (total % 2) {
        pariDispari = 'dispari'
        
    } else{
        pariDispari = 'pari'
    }

    if(pariDispari === num){
        winner = 'hai vinto'
    }

    return winner
}

// Determino la costante per dichiarare il vincitore 
const win = vincitore(pairOdd);

console.log(`questo il risultato ${win}`);













