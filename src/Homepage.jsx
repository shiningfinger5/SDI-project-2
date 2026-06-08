import { useEffect, useState } from "react"
// import './Homepage.css'
// import { useNavigate } from "react-router-dom"

function Homepage(){
  const [movieList, setMovieList]= useState([]);
  const Url = "https://api.tvmaze.com/shows?page=0";
  // const navigate = useNavigate();
  

    useEffect(() => {
      fetch(Url)
      .then(data=> data.json())
      .then(data=> {
        console.log(data);
        setMovieList(data);
        })
    }, [])

    const terrificTv = movieList.filter((movieObject)=>{
      return movieObject.rating.average > 6;
    })



    return(
      <div>
        <ul className = 'movies'>
          {terrificTv.map((movieObject) => {
            return (
              <li key={movieObject.id}>
                Name:{movieObject.name} - Genre:{movieObject.genres}  Rating:{movieObject.rating.average}
              </li>
            )
          })}
        </ul>
      </div>
    )

}


export default Homepage