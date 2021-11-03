
const sumDuplicateWords = (countedWords: Record<string, number>, currentWord: string): Record<string, number> => {
  if(currentWord in countedWords){
    countedWords[currentWord] += 1;
  }
  else{
    countedWords[currentWord] = 1;
  }
  return countedWords;
};

const isValidString = (word: string) : boolean => {
  return word != "";
}

export const wordCount = (sequence: string): Record<string, number> => {
  if (sequence == ""){
    return {};
  }
  let words = sequence.toLowerCase().split(" ");
  return  words.filter(isValidString).reduce(sumDuplicateWords,{});
};
