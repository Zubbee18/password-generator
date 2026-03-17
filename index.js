const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordEl1 = document.querySelector(".div1")
let passwordEl2 = document.querySelector(".div2")
let passwordInput = document.querySelector(".password-length");
// let numbersOn = document.querySelector("input")

function generatePassword() {
    let length = Number(passwordInput.value);
    let password = ""
    let randomIndex
    for (let i = 0; i<length; i++) {
        randomIndex = Math.floor(Math.random()*characters.length + 1)
        if (characters[randomIndex] !== undefined)
            password += characters[randomIndex];
    }
    return password
}

function renderPassword() {
    let newPassword1 = generatePassword()
    let newPassword2 = generatePassword()
    
    passwordEl1.textContent = newPassword1
    passwordEl2.textContent = newPassword2
}

function copyText(className) {
    let text = document.getElementsByClassName(className).innerText
    navigator.clipboard.writeText(text)
    
    .then(() => {
        alert("Copied to clipboard!");
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
        });
}

passwordEl1.addEventListener("onclick", copyText("div1"))
passwordEl2.addEventListener("onclick", copyText("div2"))

