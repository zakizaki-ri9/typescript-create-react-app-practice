[Create React App](https://github.com/facebook/create-react-app)を用いた、TypeScriptの練習

# 本プロジェクトを作った際のコマンド

```bash
# npm
npm -g install create-react-app

# yarn
yarn global add create-react-app

# typescript版のreact雛形生成
create-react-app typescript-create-react-app-practice --typescript
```

# 実行方法

```bash
# npm
npm start

# yarn
yarn start
```

# コミット

```bash
# git cz -> lint-stagedによるeslint自動修正
# TODO: commitlintによって、git commitによるコミットを防ぐ
yarn commit
```

# メモ

## React

### React Hooks

`React Hooks`は、`React.FC`内で状態管理ができる仕組み。

- [フックの導入](https://ja.reactjs.org/docs/hooks-intro.html)
- [フックAPIリファレンス（APIの一覧）](https://ja.reactjs.org/docs/hooks-reference.html)
- [ステートフックの利用法](https://ja.reactjs.org/docs/hooks-state.html)

#### useState

状態を保持する変数のようなイメージ。Vueでいうところの`data`属性に似ている。

**実装イメージ**

```javascript
import * as React from 'react'

const Button: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>
      Click Count: {count}
    </button>
  </div>
}

export default Button
```

#### useMemo

Vueでいうcomputedのようなもの、参照している変数に変更なければ、キャッシュした値を返すような作りとなっている。

```javascript
import * as React from 'react'

const Button: React.FC = () => {
  const [count, setCount] = React.useState(0)
  const double = React.useMemo(() => count * 2, [count])
  const doubleWithUnit = React.useMemo(() => `${double} pt`, [double])
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>
      1+
    </button>
    <p>count: {count}</p>
    <p>double: {double}</p>
    <p>doubleWithUnit: {doubleWithUnit}</p>
  </div>
}

export default Button
```

#### useCallback

Vueでいう`props: { type: Function }`のイメージ。

```javascript
import React from 'react'
import { useState, useCallback } from 'react'

type Props = {
  clickedX: number
  clickedY: number
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Component: React.FC<Props> = props => (
  <div>
    <div
      style={{ width: 100, height: 100, background: '#ccf' }}
      onClick={props.handleClick}
    >
    <p>X: { props.clickedX }</p>
    <p>Y: { props.clickedY }</p>
    </div>
  </div>
)

const Container: React.FC = () => {
  const [state, update] = useState({
    clickedX: 0,
    clickedY: 0
  })
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.persist()
      const {top, left} = event.currentTarget.getBoundingClientRect()
      update(prev => ({
        ...prev,
        clickedX: event.clientX - left,
        clickedY: event.clientY - top
      }))
    },
    []
  )
  
  return (
    <Component
      clickedX={state.clickedX}
      clickedY={state.clickedY}
      handleClick={handleClick}
    >
    </Component>
  )
}

export default Container
```
