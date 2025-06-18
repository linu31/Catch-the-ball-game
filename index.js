const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
const scoreEl = document.getElementById('score');

let ballX = 200, ballY = 0;
let paddleX = 160;
let score = 0;
let speed = 3;

// Move paddle with arrow keys
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= 20;
  } else if (e.key === 'ArrowRight' && paddleX < 320) {
    paddleX += 20;
  }
  paddle.style.left = paddleX + 'px';
});

// Ball drop loop
function dropBall() {
  ballY += speed;
  ball.style.top = ballY + 'px';

  // If ball reaches the bottom
  if (ballY >= 570) {
    // Check if ball is within paddle
    if (ballX > paddleX && ballX < paddleX + 80) {
      score++;
      speed += 0.2; // increase difficulty
    } else {
      alert("Game Over! Final Score: " + score);
      resetGame();
      return;
    }
    resetBall();
  }

  requestAnimationFrame(dropBall);
}

// Reset ball to top
function resetBall() {
  ballX = Math.random() * 380;
  ballY = 0;
  ball.style.left = ballX + 'px';
  scoreEl.innerText = score;
}

// Reset entire game
function resetGame() {
  score = 0;
  speed = 3;
  paddleX = 160;
  paddle.style.left = paddleX + 'px';
  resetBall();
}

resetBall();
dropBall();
