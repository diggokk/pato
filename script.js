let score = 0;
let gameInterval;

const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    gameInterval = setInterval(showDuck, 1000);
}

function showDuck() {
    const duck = document.createElement('div');
    duck.classList.add('pato');
    duck.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
    duck.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    
    duck.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        gameArea.removeChild(duck);
    });

    gameArea.appendChild(duck);

    setTimeout(() => {
        if (gameArea.contains(duck)) {
            gameArea.removeChild(duck);
        }
    }, 800);
}

startButton.addEventListener('click', startGame);