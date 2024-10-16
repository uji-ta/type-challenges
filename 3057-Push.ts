/* _____________ ここにコードを記入 _____________ */

type Push<T extends unknown[], U> =  [...T, U]

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3057/answer/ja
  > 解答を見る：https://tsch.js.org/3057/solutions
  > その他の課題：https://tsch.js.org/ja
*/