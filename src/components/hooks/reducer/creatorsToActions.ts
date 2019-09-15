export type ReturnTypes<T> = {
  // key-valueの走査、T[K] extends (...args: any[]) => anyで関数の型推論
  [K in keyof T]: T[K] extends (...args: any[]) => any
    // 関数の場合
    ? ReturnType<T[K]>
    // 関数ではない場合
    : never
}

export type Unbox<T> = T extends { [K in keyof T]: infer U} ? U : never

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>
