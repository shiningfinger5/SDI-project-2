// /useContext can be used on navBar. just have the 6 genres be a button on it.
import './App.css'
import { Link } from "react-router-dom"
import './Navbar.css'

function NavBar({setSelectedGenre}) {
  return (
    <nav className="navbar">
      <h1>Terrific TV Time</h1>
      <button onClick={() => setSelectedGenre("Drama")}>Drama</button>
      <button onClick={() => setSelectedGenre("Comedy")}>Comedy</button>
      <button onClick={() => setSelectedGenre("Action")}>Action</button>
      <button onClick={() => setSelectedGenre("Science-Fiction")}>Sci-Fi</button>
      <button onClick={() => setSelectedGenre("Thriller")}>Thriller</button>
      <button onClick={() => setSelectedGenre("Romance")}>Romance</button>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default NavBar