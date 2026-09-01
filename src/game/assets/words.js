import allowed from "./wordle-allowed-guesses.txt?raw";
import answers from "./wordle-answers-alphabetical.txt?raw";
import bgAllowed from './bg-words-validated-cyrillic.txt?raw';
import bgAnswers from './bg-possible-answers.txt?raw';

const onlyAllowedWords = allowed
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const possibleAnswersWords = answers
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const allowedWords = [...onlyAllowedWords, ...possibleAnswersWords];

const bulgarianWords = bgAllowed
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const bulgarianPossibleAnswersWords = bgAnswers
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

export { allowedWords, possibleAnswersWords, bulgarianWords, bulgarianPossibleAnswersWords };