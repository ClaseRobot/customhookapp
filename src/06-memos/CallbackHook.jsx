import { useState } from 'react'
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10)

  const incrementFather = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Hello Counter {counter}</h1>
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}