/** Eliminate falsy values from array (this uses override Array from lib.es5.d.ts) */
export default <T>(value: T[]) => value.filter(Boolean);
