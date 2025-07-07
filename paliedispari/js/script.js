//scelta pari o dispari utente
const choose = prompt('Scegli fra pari e dispari');
console.log(choose);

// inserire numero da parte dell'utente
const userNum = parseInt(prompt('Inserisci un numero da 1 a 5')) ;
console.log(userNum);

// funzione per generare numero da uno a cinque
function generateNum(min, max) {
return Math.floor(Math.random() * (max-min +1));
}

// variabile numero random del pc
const pcNum = generateNum(1,5);
console.log(pcNum);

// somma dei due numeri: utente + random
const sum = userNum + pcNum;
console.log (sum);

// funzione con if - else interno per dichiarare se la somma è pari o dispari
function evenorOdd() {
  if (sum % 2 == 0) {
    console.log('Pari');
  }

  else {
    console.log('Dispari');
  }

  return;
}

// chiamata della funzione
evenorOdd();


