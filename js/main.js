// INIT 

const paliBtn = document.getElementById("pali-btn");
const dispariBtn = document.getElementById("dispari-btn");
const paliResult = document.getElementById("pali-result");
const dispariCard = document.getElementById("dispari-card")

// associo la funzione isPalindrome al bottone
paliBtn.addEventListener("click", function () {
    let usersWord = document.getElementById("pali-input").value;
    if (usersWord != "") {
        isPalindrome(usersWord);
    } else {
        paliResult.innerHTML = ("Per favore inserisci una parola o una frase");
    }
})

// definisco la funzione
function isPalindrome(word) {
    // regex per gli spazi bianchi
    word = word.replace(/\s/g, '');
    word = word.toLowerCase();
    // scrivo la parola al contrario in una variabile 
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        const ch = word[i];
        reversed += ch;
    }
    // verifico se la parola è palindroma
    if (word == reversed) {
        paliResult.innerHTML = "<strong>Sì, è palindromo</strong>";
    }
    else {
        paliResult.innerText = "<strong>No, non è palindromo</strong>";
    }
}

// associo la funzione startGame al bottone
dispariBtn.addEventListener("click", function () {
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
    else {
        alert("Scegli pari o dispari");
    }
});

// definisco startGame
function startGame(scelta) {
    userNum = parseInt(document.getElementById("num").value);
    if (userNum < 1 || userNum > 5 || isNaN(userNum)) {
        alert("Inserisci un numero tra 1 e 5")
    } else {
        setTimeout(() => {
            dispariCard.innerHTML = "<p>Hai scelto " + scelta + " e hai tirato il numero: " + userNum + "</p>";
        }, 500);
        // genero il numero random e lo sommo
        let computerNum = Math.floor(Math.random() * 5 + 1);
        setTimeout(() => {
            dispariCard.innerHTML += `<p>Il computer ha tirato: ${computerNum}</p>`
        }, 2000);

        let sum = userNum + computerNum;
        let result = "dispari";
        // verifico il risultato e porto nel dom il risultato
        if (sum % 2 == 0) {
            result = "pari";
        }
        if (scelta == result) {
            setTimeout(() => {
                dispariCard.innerHTML += `<p><strong>Il risultato è ${sum} (${result}): hai vinto</strong></p>`;
                dispariBtn.innerText = "Rigioca";
            }, 4000);

        }
        else {
            setTimeout(() => {
                dispariCard.innerHTML += `<p><strong>Il risultato è ${sum} (${result}): hai perso</strong></p>`;
                dispariBtn.innerText = "Rigioca";
            }, 4000);
        }
    }
}