const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// grabbing some elements needed later
let generateBtnEl = document.getElementById("generate-btn")
let firstPswdEl = document.getElementById("firstPswd")
let secondPswdEl = document.getElementById("secondPswd")

// function generates random index used to build password
function randomIndex() {
    return Math.floor( Math.random() * characters.length )
}

// function returns a fixed 15 character long password
function generatePassword() {
    let newPass = ""
    for (i = 0; i < 15; i++) {
        newPass += characters[randomIndex()]
    }
    return newPass
}

// adding event listener to the button so that new pass is generated on click
generateBtnEl.addEventListener("click", function() {
    firstPswdEl.textContent = generatePassword()
    secondPswdEl.textContent = generatePassword()
})