import '../game/styles/WordleStyles.css'
import Wordle from '../game/components/Wordle.jsx';
import {possibleAnswersWords, allowedWords, bulgarianWords} from '../game/assets/words.js';
function Game({language}) {
  function chooseRandomWord(language) {
    if (language === 'English') {
      var randomIndex = Math.floor(Math.random() * possibleAnswersWords.length);
      return possibleAnswersWords[randomIndex];
    }
    else {
      var randomIndex = Math.floor(Math.random() * bulgarianWords.length);
      return bulgarianWords[randomIndex];
    }
  }
  let randomWord = chooseRandomWord(language);
  return (
    <div className='game'>
      <div className='game-background' />
      <div className='wordle-title'>WORDLE</div>
      <Wordle content={randomWord} language={language} className='game-content'/>
    </div>
  );
}

export default Game;