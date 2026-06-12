import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './DisplayShows.css'


function DisplayShows({ selectedGenre }) {
  const Url = "https://api.tvmaze.com/shows?page=";
  const [tvList, setTvList] = useState([]);

  // useEffect(() => {
  //   fetch(Url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTvList(data);
  //     });
  // }, []);

  useEffect(() => {
    Promise.all([
      fetch(`${Url}0`).then(res => res.json()),
      fetch(`${Url}1`).then(res => res.json()),
      fetch(`${Url}2`).then(res => res.json()),
      fetch(`${Url}3`).then(res => res.json()),
    ])
        .then((pages) => {
          const allShows = pages.flat();
          setTvList(allShows);
        })
  }, []);
  


  const filteredShows = tvList.filter((tvObject) => {
    return tvObject.genres.includes(selectedGenre) && tvObject.rating.average > 8;
  });

  return (
    <div>
      <h2 style={{ textDecoration: 'underline' }}>{selectedGenre} Shows</h2>

      <ul className = "tvContainer">
        {filteredShows.map((tvObject) => {
          return (
            
            <li className = "tvCard" key={tvObject.id}>
              <strong className ="tvDisplayTitle"> {tvObject.name} </strong>
              <br/>
              <strong>Genre:</strong> {tvObject.genres.join(", ")}
              <br/>
              <strong>Rating:</strong>{" "} {tvObject.rating.average}
              <br/>
              {tvObject.image && (
                <Link to={`/show/${tvObject.id}`}>
                  <img
                    className="tvPoster"
                    src={tvObject.image.medium}
                    alt="tv Poster"
                  />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayShows;