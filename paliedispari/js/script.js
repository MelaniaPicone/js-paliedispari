//scelta pari o dispari utente
const choose = prompt('Scegli fra pari e dispari');
const choiceEven = ('pari');
const choiceOdd = ('dispari');
console.log(choose);

// inserire numero da parte dell'utente
const userNum = parseInt(prompt('Inserisci un numero da 1 a 5')) ;
console.log(userNum);

// funzione per generare numero da uno a cinque
function generateNum(min,max) {
return Math.floor(Math.random() * (max-min +1));
}

console.log(generateNum(1,5));

// somma dei due numeri: utente + random
let sum = userNum + generateNum(1,5);
console.log (sum);

// funzione con if - else interno per dichiarare se la somma è pari o dispari
function evenorOdd() {
  if (sum % 2 == 0) {
    console.log('La somma ha un risultato pari');
  }
  else {
    console.log('La somma ha un risultato dispari')
  }
  return;
}

// chiamata della funzione
evenorOdd();

// dichiarazione della vittoria
if (sum % 2 == 0 && choiceEven) {
  console.log('Hai vinto')
}

else if (sum % 2 != 0 && choiceOdd) {
  console.log ('Hai vinto')
}

else {
console.log('Hai perso')
}

