import { useState } from 'react'
import './App.css'
import Homepage from './Homepage.jsx'
import NavBar from './Navbar.jsx'
import DisplayShows from './DisplayShows.jsx'
import TvCard from "./TvCard.jsx";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./About.jsx"


function App() {
  // const [count, setCount] = useState(0)
  const [selectedGenre, setSelectedGenre] = useState("Drama")

  return (
    <>
      <div className="NavContainer">
        <NavBar setSelectedGenre={setSelectedGenre} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <DisplayShows selectedGenre={selectedGenre} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/show/:showID" element={<TvCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
