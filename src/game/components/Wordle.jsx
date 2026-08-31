import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/GameContentStyles.css';
import {allowedWords, possibleAnswersWords} from '../assets/words.js';
import Row from "./Row.jsx";
import Keyboard from '../components/Keyboard.jsx';

function Wordle({ content, className = "" }) {
  const [currentInput, setInput] = useState("");
  const [result, setResult] = useState(['E', 'E', 'E', 'E', 'E']);
  const [tries, setTries] = useState(0);
  const [keyResults, setKeyResults] = useState({});
  let numrows = 6;
  const [rows, setRows] = useState(
    Array(numrows).fill(null).map(() => ({
      values: Array(5).fill(''),
      result: Array(5).fill('E'),
      shake: false
    }))
  );
  function checkValidLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  function checkValidWord(word) {
    if (word.length !== 5) {
      return false;
    }
    else if (!/^[a-zA-Z]+$/.test(word)) {
        return false;
    }
    if (!allowedWords.includes(word.toUpperCase())) {
      return false;
    }
    return true;
  }
  function checkWordle(tryWord, tries) {
    let contentUpper = content.toUpperCase();
    let tryWordUpper = tryWord.toUpperCase();
    let result = [];
    for (let i = 0; i < tryWord.length; i++) {
        result[i] = 'X';
        if (tryWordUpper[i] === contentUpper[i]) {
            result[i] = 'G';
            contentUpper = contentUpper.replace(tryWordUpper[i], '_');
        }
    }
    for (let i = 0; i < tryWord.length; i++) {
        if (result[i] === 'G') continue;
        if (contentUpper.includes(tryWordUpper[i])) {
            result[i] = 'Y';
            contentUpper = contentUpper.replace(tryWordUpper[i], '_');
        }
    }
    return result;
  }
  function updateKeyboard(word, result) {
    setKeyResults(prev => {
      const updated = { ...prev };
      word.toUpperCase().split('').forEach((letter, index) => {
        const newResult = result[index];
        if (newResult === 'G') {
          updated[letter] = 'green';
        }
        else if (newResult === 'Y' && updated[letter] !== 'green') {
          updated[letter] = 'yellow';
        }
        else if (newResult === 'X' && !updated[letter]) {
          updated[letter] = 'gray';
        }
      });
      return updated;
    });
}
  function addResult(word, result, tries) {
  word = word.padEnd(5, ' ');
  const newRows = rows.map((row, index) =>
    index === tries
      ? {
          values: word.toUpperCase().split(''),
          result: result,
          shake: false
        }
      : row
  );
  setRows(newRows);
  }
  function gameOver() {
    if (tries >= 6) {
      return true;
    }
    if (result.every(r => r === 'G')) {
      return true;
    }
    return false;
  }
  function shakeRow(tries) {
    setRows(rows.map((row, index) =>
      index === tries
        ? { ...row, shake: true }
        : row
    ));
  }
  function handleKey(key) {
    if (key === 'ENTER') {
      if (checkValidWord(currentInput) && !gameOver()) {
        let result = checkWordle(currentInput, tries);
        setResult(result);
        addResult(currentInput, result, tries);
        updateKeyboard(currentInput, result);
        setTries(tries + 1);
        setInput("");
      } else {
        shakeRow(tries);
      }
    }

    if (key === 'BACKSPACE') {
      setInput(currentInput.slice(0, -1));
      if (currentInput.length > 0 && !gameOver()) {
        addResult(currentInput.slice(0, -1), Array(5).fill('E'), tries);
      }
    }

    if (checkValidLetter(key) && currentInput.length < 5) {
        setInput(currentInput => (currentInput + key));
        if (!gameOver()) {
          addResult(currentInput+key, Array(5).fill('E'), tries);
        }
    }
  }
  useEffect(() => {
    function handleKeyDown(event) {
      handleKey(event.key.toUpperCase());
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentInput, tries, rows, result]);
  return (
    <>
      <div className="wordle">
        {rows.map((row, index) => (
          <Row
          key={index}
          values={row.values}
          result={row.result}
          shake={row.shake}
          />
        ))}
      </div>
      <Keyboard onKey = {handleKey} keyResults={keyResults}/>
      <p>{gameOver() ? content : ""}</p>
    </>
  );
}

export default Wordle;