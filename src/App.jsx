import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function reset() {
    setCounter(0)
  }

  return (
    <>
      <h1>Hello CodeSandbox</h1>
    </>
  )
}

export default App
