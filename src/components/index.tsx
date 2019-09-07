import * as React from 'react'
import { rows } from './data'
import Thead from './table/thead'
import Tbody from './table/tbody'

const Component: React.FC = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <Thead></Thead>
      <Tbody rows={rows}></Tbody>
    </table>
  </div>
)

export default Component
