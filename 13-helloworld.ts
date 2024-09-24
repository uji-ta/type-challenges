/* _____________ ここにコードを記入 _____________ */

type HelloWorld = string // expected to be a string

/* _____________ テストケース _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/13/answer/ja
  > 解答を見る：https://tsch.js.org/13/solutions
  > その他の課題：https://tsch.js.org/ja
*/
