import React from 'react'
import { useState, useEffect } from 'react'

const Component: React.FC = () => {
  const [state, updateState] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      updateState(state + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div>
      <div>count: {state}</div>
    </div>
  )
}

export default Component
