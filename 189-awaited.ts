/* _____________ ここにコードを記入 _____________ */

type MyAwaited<T> =
  T extends { then: (onfulfilled: (value: infer U) => any) => any }
    ? MyAwaited<U>
    : T;

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/189/answer/ja
  > 解答を見る：https://tsch.js.org/189/solutions
  > その他の課題：https://tsch.js.org/ja
*/
