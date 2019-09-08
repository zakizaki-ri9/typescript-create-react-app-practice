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

いわゆるカウンター。

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
