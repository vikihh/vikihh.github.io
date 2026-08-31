import '../game/WordleStyles.css'
import Wordle from '../game/Wordle.jsx';
import {possibleAnswersWords, allowedWords} from '../game/words.js';
function Game() {
  function chooseRandomWord() {
    var randomIndex = Math.floor(Math.random() * possibleAnswersWords.length);
    return possibleAnswersWords[randomIndex];
  }
  let randomWord = chooseRandomWord();
  return (
    <>
    <div className='game-background' />
    <div className='wordle-title'>WORDLE</div>
    <Wordle content={randomWord} />
    </>
  );
}

export default Game;