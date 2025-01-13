import React, { useState } from 'react'
import "./CounterApp.css"
function CounterApp() {
  const  [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div id='main'>
      <div id='child'>
            <h3>Counter {count}</h3>
            <div id='2child'>
            <button id='btn' onClick={increment} >Increment</button>
            <button id='btn' onClick={decrement} >Decrement</button>
            <button id='btn' onClick={reset} >Reset</button>
            </div>
      </div>
              

            
    </div>
  )
}

export default CounterApp
