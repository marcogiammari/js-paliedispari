const checkBtn = document.getElementById("pali-btn");
const oddBtn = document.getElementById("dispari-btn");
const result = document.getElementById("pali-result");

checkBtn.addEventListener("click", isPalindrome);

function isPalindrome() {
    let word = document.getElementById("input-text").value;
    let reversed = "";
    for (let i = word.length-1; i >= 0; i--) {
        const ch = word[i];
        reversed += ch;
        console.log(ch, reversed);
    }
    if (word == reversed) {
        result.innerHTML = "Yes, it is";
    }
    else {
        result.innerText = "No, it isn't";
    }
}

oddBtn.addEventListener("click", startGame); 

function startGame() {
    choice = prompt("pari o dispari?");
    userNum = parseInt(prompt("scegli un numero da uno a cinque"));
    computerNum = Math.floor(Math.random() * 5 + 1);
    sum = userNum + computerNum;
    let result = "dispari";
    if (sum%2==0) {
        result = "pari";
    }
    if (choice == result) {
        alert(`il risultato è ${result} (${sum}): hai vinto`);
    }
    else {
        alert(`il risultato è ${result} (${sum}): hai perso`)
    }
}