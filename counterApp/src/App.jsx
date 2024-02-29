import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // Increment the counter value
  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1)
    }
    else {
      alert('Counter value should not exceed 20')
    }
    
  }

  // Decrement the counter value
  const subtractValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
    }
    else{
      alert('Counter value must be greater than 0')
    }
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
