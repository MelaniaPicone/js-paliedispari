// parola inserita dall'utente con stampa
const userWord = prompt('Inserisci qui la tua parola');
console.log(userWord);

// funzione con reverse
function reverseWord(text) {
let result = '';

for(let i=userWord.length -1 ; i>=0; i--) {
  result += text[i];
}

// restituisco la funzione fuori
return result;
}

const result = reverseWord(userWord);
console.log(result);

if (reverseWord === userWord) {
  console.log('La parola che hai inserito è palindroma');
}

else {
  console.log('La parola che hai inserito non è palindroma')
}