// INIT 

const paliBtn = document.getElementById("pali-btn");
const dispariBtn = document.getElementById("dispari-btn");
const paliResult = document.getElementById("pali-result");
const dispariResult = document.getElementById("dispari-result")

// associo la funzione isPalindrome al bottone
paliBtn.addEventListener("click", function() {
    isPalindrome(document.getElementById("pali-input").value);
})

// definisco la funzione
function isPalindrome(word) {
    // regex per gli spazi bianchi
    word = word.replace(/\s/g, '' );
    // scrivo la parola al contrario in una variabile 
    let reversed = "";
    for (let i = word.length-1; i >= 0; i--) {
        const ch = word[i];
        reversed += ch;
    }
    // verifico se la parola è palindroma
    if (word == reversed) {
        paliResult.innerHTML = "Sì, è palindromo";
    }
    else {
        paliResult.innerText = "No, non è palindromo";
    }
}

// associo la funzione startGame al bottone
dispariBtn.addEventListener("click", function() {
    // prendo dal dom la scelta
    let sceltaPari = document.getElementById("scelta-pari").checked;
    let sceltaDispari = document.getElementById("scelta-dispari").checked;
    // passo l'argomento a startGame in base alla scelta
    if (sceltaPari) {
        startGame("pari");
    }
    else if (sceltaDispari) {
        startGame("dispari");
    }
}); 

// definisco startGame
function startGame(scelta) {
    // controllo di validazione del numero
    let validNum = false;
    while (!validNum) {
        userNum = parseInt(prompt("scegli un numero da uno a cinque"));
        if (userNum > 0 && userNum < 6) {
            validNum = true;
        }
    }
    // genero il numero random e lo sommo
    let computerNum = Math.floor(Math.random() * 5 + 1);
    let sum = userNum + computerNum;
    let result = "dispari";
    // verifico il risultato e porto nel dom il risultato
    if (sum%2==0) {
        result = "pari";
    }
    if (scelta == result) {
        dispariResult.innerHTML = (`il risultato è ${result} (${sum}): hai vinto`);
    }
    else {
        dispariResult.innerText = (`il risultato è ${result} (${sum}): hai perso`);
    }
}