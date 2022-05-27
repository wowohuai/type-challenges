/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 */

type Length<T extends readonly (keyof any)[]> = T["length"];
