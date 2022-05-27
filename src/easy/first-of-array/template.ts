/**
 * Implement a generic First<T> that takes an Array T and returns it's first element's type.
 *
 *
 * 解法:
 *  返回T[0]
 *  1. T extends []
 *  2. T['length'] extends 0
 *  3. T 为 []时, T[number] 为never
 *  4. infer 结合 extends
 *
 *
 */

// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
