const gameContainer = document.getElementById('game-container');



function createWord(word, translation) {
    const newWord = document.createElement('div');
    newWord.textContent = word;
    newWord.classList.add('word');
}

const animation = newWord.animate([
    { top: '0' },
    { top: '100%' }
], { duration: 5000 });

animation.onfinish = () => {
    gameContainer.removeChild(newWord);
};
