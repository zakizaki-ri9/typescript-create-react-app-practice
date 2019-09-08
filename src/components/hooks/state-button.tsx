import * as React from 'react'

const Button: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>
      +1 / Count: {count}
    </button>
    <button onClick={() => {
      setCount(count+2)
    }}>
      +2 / Count: {count}
    </button>
  </div>
}

export default Button
