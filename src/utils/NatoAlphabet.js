const NATO_SPELLING_ALPHABET = new Map([
  ["A", "Alfa"],
  ["B", "Bravo"],
  ["C", "Charlie"],
  ["D", "Delta"],
  ["E", "Echo"],
  ["F", "Foxtrot"],
  ["G", "Golf"],
  ["H", "Hotel"],
  ["I", "India"],
  ["J", "Juliett"],
  ["K", "Kilo"],
  ["L", "Lima"],
  ["M", "Mike"],
  ["N", "November"],
  ["O", "Oscar"],
  ["P", "Papa"],
  ["Q", "Quebec"],
  ["R", "Romeo"],
  ["S", "Sierra"],
  ["T", "Tango"],
  ["U", "Uniform"],
  ["V", "Victor"],
  ["W", "Whiskey"],
  ["X", "Xray"],
  ["Y", "Yankee"],
  ["Z", "Zulu"],
]);

// Implement Durstenfeld Shuffle, an optimized version of Fisher-Yates.
// https://stackoverflow.com/a/12646864/16455963
// The parameter is modified.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getTheAlphabet() {
  return NATO_SPELLING_ALPHABET.keys();
}

const mockAlphabet = new Map([
  ["A", "Alfa"],
  ["B", "Bravo"],
  ["C", "Charlie"],
  ["D", "Delta"],
  ["E", "Echo"],
]);

function getRandomizedAlphabet() {
  // let randomizedAlphabet = Array.from(mockAlphabet.keys());
  let randomizedAlphabet = Array.from(getTheAlphabet());
  shuffleArray(randomizedAlphabet);
  return randomizedAlphabet;
}

function getTelephony(letter) {
  return NATO_SPELLING_ALPHABET.get(letter);
}

function getAlphabetSize() {
  return NATO_SPELLING_ALPHABET.size;
}

export { getRandomizedAlphabet, getTelephony, getAlphabetSize };
