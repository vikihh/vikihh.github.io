import { useState } from 'react';
import { useEffect } from 'react';
import './WordleStyles.css';
import words from './words.js';
function Square({ value, className = "" }) {
  return (
    <div className={`square ${className}`}>
      {value}
    </div>
  );
}

function Row({ values, result, shake }) {
  function getClassName(value, result) {
    if (result === 'G') {
      return 'green';
    } else if (result === 'Y') {
      return 'yellow';
    } else if (result === 'X') {
      return 'gray';
    } else {
      return 'empty';
    }
  }

  return (
    <div className={`row ${shake ? 'shake' : ''}`}>
      {values.map((value, index) => (
        <Square
          key={index}
          value={value}
          className={getClassName(value, result[index])}
        />
      ))}
    </div>
  );
}

function Wordle({ content, className = "" }) {
  const [currentInput, setInput] = useState("");
  const [result, setResult] = useState(['E', 'E', 'E', 'E', 'E']);
  const [tries, setTries] = useState(0);
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
    if (!words.includes(word.toUpperCase())) {
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
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        if (checkValidWord(currentInput) && !gameOver()) {
          let result = checkWordle(currentInput, tries);
          setResult(result);
          addResult(currentInput, result, tries);
          setTries(tries + 1);
          setInput("");
        } else {
          shakeRow(tries);
        }
      }
      if (event.key === 'Backspace') {
        setInput(currentInput.slice(0, -1));
        if (currentInput.length > 0 && !gameOver()) {
          addResult(currentInput.slice(0, -1), Array(5).fill('E'), tries);
        }
      }
      if (checkValidLetter(event.key) && currentInput.length < 5) {
        setInput(currentInput => (currentInput + event.key));
        if (!gameOver()) {
          addResult(currentInput+event.key, Array(5).fill('E'), tries);
        }
      }
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
      <p>{gameOver() ? content : ""}</p>
    </>
  );
}

export default Wordle;