// parola inserita dall'utente con stampa
const userWord = prompt('Inserisci qui la tua parola');
console.log(userWord);

// funzione con reverse
function reverseWord(text) {
let result = '';

for(let i=text.lenght -1 ; i>=0; i--) {
 console.log(text[i]);
  result += text[i];
}

return result;
}
