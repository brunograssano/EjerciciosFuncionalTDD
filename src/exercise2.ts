const sum = ( a: number, b : number) : number => {
  return a + b
}

export const average = (numbers: number[]): number => {
  if(!numbers || numbers.length==0){
    return 0;
  }
  return numbers.reduce(sum)/numbers.length
};
