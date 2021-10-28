type RealFunction = (x: number) => number;

const centralDifference =  (fn: RealFunction, h: number) : RealFunction => {
  return (x:number) => ( fn(x + h) - fn(x - h) )/( 2 * h );
}

/**
 * Returns a function that approximates the derivative of fn using a central difference
 * with a specified h.
 */
export const derive = (fn: RealFunction, h: number): RealFunction => {
  return centralDifference(fn,h);
};
