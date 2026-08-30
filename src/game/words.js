import text from "./5-letter-words.txt?raw";

const words = text
  .split(/\r?\n/)
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

export default words;