import React from 'react'
import logo from './logo.svg'
import './App.css'
import Table from './components/index'
import ChildrenTest from './components/chidren-test/index'
import StateButton from './components/hooks/state-button'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Table></Table>
      <ChildrenTest></ChildrenTest>
      <StateButton></StateButton>
    </div>
  )
}

export default App
