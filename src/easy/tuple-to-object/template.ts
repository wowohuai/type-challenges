/**
 * Give an array, transform into an object type and the key/value must in the given array.

 */

type TupleToObject<T extends readonly any[]> = {
  [K in keyof T]: T[K];
};
