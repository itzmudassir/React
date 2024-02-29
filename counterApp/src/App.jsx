import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // Increment the counter value
  const addValue = () => {
    setCounter(counter + 1)
  }

  // Decrement the counter value
  const subtractValue = () => {
    setCounter(counter - 1)
  }
  return(
    <>
  <h1>Counter App</h1>
  <h3>Counter Value: {counter}</h3>
  <button onClick={addValue}>Increment</button>
  <button onClick={subtractValue}>Decrement</button>
  </>
  )
}

export default App
