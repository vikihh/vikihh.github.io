import '../game/styles/WordleStyles.css'
import Wordle from '../game/components/Wordle.jsx';
import {possibleAnswersWords, allowedWords} from '../game/assets/words.js';
function Game() {
  function chooseRandomWord() {
    var randomIndex = Math.floor(Math.random() * possibleAnswersWords.length);
    return possibleAnswersWords[randomIndex];
  }
  let randomWord = chooseRandomWord();
  return (
    <div className='game'>
      <div className='game-background' />
      <div className='wordle-title'>WORDLE</div>
      <Wordle content={randomWord} className='game-content'/>
    </div>
  );
}

export default Game;