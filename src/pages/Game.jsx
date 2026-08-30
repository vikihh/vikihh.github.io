import '../game/WordleStyles.css'
import Wordle from '../game/Wordle.jsx'
import words from '../game/words.js';
function Game() {
  function chooseRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  let randomWord = chooseRandomWord();
  return (
    <div className='game-background'>
      <div className='wordle-title'>WORDLE</div>
      <Wordle content={randomWord} />
    </div>
  );
}

export default Game;