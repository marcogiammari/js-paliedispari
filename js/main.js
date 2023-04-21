const checkBtn = document.getElementById("pali-btn");
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