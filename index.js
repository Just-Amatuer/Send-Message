// First Message 

let firstButton = document.getElementById("firstButton");
let firstInput = document.getElementById("firstInput");
let firstMessage = document.getElementById("firstMessage");

firstButton.addEventListener("click", () => {
    firstMessage.innerHTML = firstInput.value;
    firstInput.value = "";
})

// Second Message

let secondButton = document.getElementById("secondButton");
let secondInput = document.getElementById("secondInput");
let secondMessage = document.getElementById("secondMessage");

secondButton.addEventListener("click", () => {
    secondMessage.innerHTML = secondInput.value;
    secondInput.value = "";
})