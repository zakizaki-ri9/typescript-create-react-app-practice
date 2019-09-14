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
