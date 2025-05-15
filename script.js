// Game variables
let targetNumber;
let attempts;
const maxNumber = 100;
const minNumber = 1;

// DOM elements
const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const newGameButton = document.getElementById('newGameButton');

// Initialize the game
function initGame() {
    targetNumber = Math.floor(Math.random() * maxNumber) + minNumber;
    attempts = 0;
    updateAttempts();
    message.textContent = '';
    message.className = 'message';
    guessInput.value = '';
    guessInput.disabled = false;
    checkButton.disabled = false;
}

// Update attempts display
function updateAttempts() {
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

// Check the player's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        message.textContent = `Please enter a valid number between ${minNumber} and ${maxNumber}`;
        message.className = 'message error';
        return;
    }

    attempts++;
    updateAttempts();

    // Compare guess with target number
    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You've guessed the number in ${attempts} attempts!`;
        message.className = 'message success';
        guessInput.disabled = true;
        checkButton.disabled = true;
    } else if (userGuess < targetNumber) {
        message.textContent = 'Too low! Try a higher number.';
        message.className = 'message error';
    } else {
        message.textContent = 'Too high! Try a lower number.';
        message.className = 'message error';
    }

    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
checkButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', initGame);

// Allow Enter key to submit guess
guessInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Start the game when the page loads
initGame(); 