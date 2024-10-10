/* _____________ ここにコードを記入 _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/43/answer/ja
  > 解答を見る：https://tsch.js.org/43/solutions
  > その他の課題：https://tsch.js.org/ja
*/
