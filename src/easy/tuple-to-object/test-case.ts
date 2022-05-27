import type {Equal, Expect} from "@type-challenges/utils";

// as const
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type Tu = typeof tuple;

type Res = TupleToObject<Tu>;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
