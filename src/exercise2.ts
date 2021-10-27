const sum = ( a: number, b : number) : number => {
  return a + b
}

export const average = (numbers: number[]): number => {
  return numbers.reduce(sum)/numbers.length
};
