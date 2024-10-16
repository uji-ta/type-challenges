/* _____________ ここにコードを記入 _____________ */

type If<C extends boolean, T, F> = C extends true ? T : F

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/268/answer/ja
  > 解答を見る：https://tsch.js.org/268/solutions
  > その他の課題：https://tsch.js.org/ja
*/
