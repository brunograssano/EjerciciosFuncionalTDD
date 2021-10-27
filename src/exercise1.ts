
const fib_rec = (n:number,previous:number,accumulated:number): number => {
  if ( n <= 0) {
    return accumulated;
  }
  return fib_rec(n-1,accumulated,previous + accumulated);
};

export const fibonacci = (n: number): number => {
  if (n <= 0){
    return 0;
  }
  return fib_rec(n-1,0,1);
};
