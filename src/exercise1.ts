
const fib_rec = (n:number,prev_a:number,prev_b:number, acum:number): number => {
  if ( n == 0) {
    return acum;
  }
  return fib_rec(n-1,prev_b,prev_a + prev_b, prev_a + prev_b);
};

export const fibonacci = (n: number): number => {
  if (n == 0){
    return 0;
  }
  return fib_rec(n-1,0,1,1);
};
