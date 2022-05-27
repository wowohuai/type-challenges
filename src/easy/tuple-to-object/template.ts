/**
 * Give an array, transform into an object type and the key/value must in the given array.

 */

type s = keyof any;

type TupleToObject<T extends readonly (keyof any)[]> = {
  // T[number] -> 遍历数组
  [P in T[number]]: P;
};
