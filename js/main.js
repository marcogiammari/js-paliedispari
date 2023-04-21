const paliBtn = document.getElementById("pali-btn");
const dispariBtn = document.getElementById("dispari-btn");
const paliResult = document.getElementById("pali-result");
const dispariResult = document.getElementById("dispari-result")

paliBtn.addEventListener("click", function() {
    isPalindrome(document.getElementById("pali-input").value);
})

function isPalindrome(word) {
    let reversed = "";
    for (let i = word.length-1; i >= 0; i--) {
        const ch = word[i];
        reversed += ch;
        console.log(ch, reversed);
    }
    if (word == reversed) {
        paliResult.innerHTML = "Sì, è palindromo";
    }
    else {
        paliResult.innerText = "No, non è palindromo";
    }
}

dispariBtn.addEventListener("click", function() {
    let sceltaPari = document.getElementById("scelta-pari").checked;
    let sceltaDispari = document.getElementById("scelta-dispari").checked;
    if (sceltaPari) {
        startGame("pari")
    }
    else {
        startGame("dispari")
    }
}); 

function startGame(scelta) {
    // let validStr = false;
    // do {
    //     choice = prompt("pari o dispari?");
    //     choice = choice.toLowerCase();
    //     if (choice == "pari" || choice == "dispari") {
    //         validStr = true;
    //     }
    // }
    // while (!validStr);

    let validNum = false;
    while (!validNum) {
        userNum = parseInt(prompt("scegli un numero da uno a cinque"));
        if (userNum > 0 && userNum < 6) {
            validNum = true;
        }
    }
    let computerNum = Math.floor(Math.random() * 5 + 1);
    let sum = userNum + computerNum;
    let result = "dispari";
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