const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = `Your score is: ${mostRecentScore} points!`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = (e) => {
    e.preventDefault();
};
