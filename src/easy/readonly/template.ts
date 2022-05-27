/**
 * mplement the built-in Readonly<T> generic without using it.

Constructs a type with all properties of T set to readonly,

meaning the properties of the constructed type cannot be reassigned.
 *
 *
 */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
