import '../game/styles/WordleStyles.css'
import Wordle from '../game/components/Wordle.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import {possibleAnswersWords, allowedWords, bulgarianWords, bulgarianPossibleAnswersWords } from '../game/assets/words.js';
function Game({language}) {
  function chooseRandomWord(language) {
    const wordList =
        language === "English"
            ? possibleAnswersWords
            : bulgarianPossibleAnswersWords;

    const index = Math.floor(Math.random() * wordList.length);

    return wordList[index];
  }
  const [word, setWord] = useState(chooseRandomWord(language));

  useEffect(() => {
    setWord(chooseRandomWord(language));
  }, [language]);

  function playAgain() {
    setWord(chooseRandomWord(language));
  }
  return (
    <div className='game'>
      <div className='game-background' />
      <div className='wordle-title'>WORDLE</div>
      <Wordle content={word} language={language} onPlayAgain={playAgain} className='game-content'/>
    </div>
  );
}

export default Game;