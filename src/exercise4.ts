
const countWords = (value: string) :  Record<string, number> => {
  let word: Record<string,number> = {}
  word[value] = 1
  return word;
};

const sumDuplicateWords = (countedWords: Record<string, number>, currentWord: Record<string, number>): Record<string, number> => {
  let keys = Object.keys(currentWord)
  if(countedWords[keys[0]]){
    let count = countedWords[keys[0]];
    countedWords[keys[0]] = count + 1;
  }
  else{
    countedWords[keys[0]] = 1;
  }
  return countedWords;
};

const isEmptyString = (word: string) : boolean => {
  return word == "";
}

export const wordCount = (sequence: string): Record<string, number> => {
  if (sequence == ""){
    return {};
  }
  let words = sequence.toLowerCase().split(" ");
  if (words.every(isEmptyString)){
    return {};
  }
  return  words.map(countWords).reduce(sumDuplicateWords);
};
