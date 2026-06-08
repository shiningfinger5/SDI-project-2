import { useState } from 'react'
// import './App.css'
import Homepage from './Homepage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Terrific TV Time</h1>
    <Homepage />
    </>
  )
}

export default App
