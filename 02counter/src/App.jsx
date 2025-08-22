import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)


  const addValue = () => {
    console.log("value added", Math.random());
    counter= counter+1;
    if(counter<=20) setcounter(counter)
  }
  const removeValue = () => {
    console.log("value removed", Math.random());
    counter= counter-1;
    if (counter>=0)setcounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>

      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
