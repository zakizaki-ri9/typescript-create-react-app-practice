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
