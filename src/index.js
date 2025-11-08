import { Generator } from "./gen.js";

const passwordGenerator = new Generator;
const buttonEl = document.getElementById("generate-password");
const firstPasswordEl = document.getElementById("password-1-display");
const secondPasswordEl = document.getElementById("password-2-display");
const inputEl = document.getElementById("slider-el")
const charCountEl = document.getElementById("char-count")
let desiredPasswordLength = inputEl.value;

document.addEventListener("DOMContentLoaded", function() {

    inputEl.addEventListener('input', function() {
        desiredPasswordLength = inputEl.value;
        charCountEl.textContent = "Characters: " + desiredPasswordLength; 
    })

    buttonEl.addEventListener("click", function() {
        const firstPassword = passwordGenerator.generatePassword(desiredPasswordLength);
        const secondPassword = passwordGenerator.generatePassword(desiredPasswordLength);
        renderPasswords(firstPassword, secondPassword);
})
})

function renderPasswords(firstPassword, secondPassword) {
    firstPasswordEl.textContent = firstPassword;
    secondPasswordEl.textContent = secondPassword;
}