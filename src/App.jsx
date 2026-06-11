import { useState } from 'react'
// import './App.css'
import Homepage from './Homepage.jsx'
import NavBar from './Navbar.jsx'
import DisplayShows from './DisplayShows.jsx'


function App() {
  // const [count, setCount] = useState(0)
  const [selectedGenre, setSelectedGenre] = useState("Drama")
  return (
    <>
      <div className = 'NavContainer'>
      <NavBar setSelectedGenre={setSelectedGenre} />
      <Homepage />
      <DisplayShows selectedGenre={selectedGenre} />
      
      </div>
    </>
  )
}

export default App
