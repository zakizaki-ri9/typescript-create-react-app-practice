import * as React from 'react'
import { Rows } from '../data'
import TR from './tr'

type Props = {
  rows: Rows
}

const Component: React.FC<Props> = props => (
  <tbody>
    {props.rows.map((row) => {
      return <TR key={row.id} {...row} />
    })}
  </tbody>
)

export default Component
