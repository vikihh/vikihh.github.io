import allowed from "./wordle-allowed-guesses.txt?raw";
import answers from "./wordle-answers-alphabetical.txt?raw";

const onlyAllowedWords = allowed
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const possibleAnswersWords = answers
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const allowedWords = [...onlyAllowedWords, ...possibleAnswersWords];

export { allowedWords, possibleAnswersWords };