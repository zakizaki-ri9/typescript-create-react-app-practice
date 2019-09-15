import * as React from 'react'

const Button: React.FC = () => {
  const [state, updateState] = React.useState({
    one: 1,
    double: 2
  })
  return <div>
    <button onClick={() => {
      updateState({
        one: state.one+1,
        double: state.double+2,
      })
    }}>
      one: {state.one}
      <br/>
      double: {state.double}
    </button>
  </div>
}

export default Button
