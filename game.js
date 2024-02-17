// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize variables
const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");
let attempts = 0;

// Function to handle the user's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        message.style.color = "green";
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Try higher!";
        message.style.color = "red";
    } else {
        message.textContent = "Try lower!";
        message.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Event listener for the guess submission
guessSubmit.addEventListener("click", checkGuess);