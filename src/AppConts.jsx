import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countLess, setCountLess] = useState(0);
  const [granCont, setGranCont]=useState(0);

  const restarContador=(e)=> {    
    setCountLess(countLess - 1);
    setGranCont(granCont-1);
  } 

  const sumarContador=(e)=> {
    setCount(count + 1);
    setGranCont(granCont+1);
  } 


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <h3>Gran cont: {granCont}</h3>
      <div className="card">
        <button onClick={sumarContador}>
          # clicks [+] {count}:  {granCont}
        </button>
        <p>
        <button onClick={restarContador}>
          # clcks [-]  {countLess * (-1)}: {granCont} 
        </button>

        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App