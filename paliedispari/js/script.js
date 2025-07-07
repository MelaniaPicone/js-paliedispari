// inserire numero da parte dell'utente
const userNum = parseInt(prompt('Inserisci un numero da 1 a 5')) ;
console.log(userNum);

// funzione per generare numero da uno a cinque

function generateNums(min,max) {
return Math.floor(Math.random() * (max-min +1))
}

console.log(generateNums(1,5));