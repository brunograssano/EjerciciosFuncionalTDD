type RealFunction = (x: number) => number;

/**
 * Returns a function that approximates the derivative of fn using a central difference
 * with a specified h.
 */
export const derive = (fn: RealFunction, h: number): RealFunction => {
  throw new Error('Not implemented');
};
