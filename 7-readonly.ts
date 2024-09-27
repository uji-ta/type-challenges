/* _____________ ここにコードを記入 _____________ */

// type MyReadonly<T> = {
//   readonly title: string
//   readonly description: string
//   readonly completed: boolean
//   readonly meta: {
//     author: string
//   }
// }

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/7/answer/ja
  > 解答を見る：https://tsch.js.org/7/solutions
  > その他の課題：https://tsch.js.org/ja
*/