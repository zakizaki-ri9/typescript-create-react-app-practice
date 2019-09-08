import * as React from 'react'
import { Props, propsMock } from '../data'

const Child: React.FC = props => (
  <div>
    start | {props.children} | end
  </div>
)

const Parent: React.FC<Props> = props => (
  <Child>
    {props.childLabel},{props.childValue}
  </Child>
)

const ChildrenTest: React.FC = () => (
  <Parent {...propsMock}>
  </Parent>
)

export default ChildrenTest
