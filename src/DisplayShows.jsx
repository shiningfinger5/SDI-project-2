import { useEffect, useState } from "react";

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
  })
  


  const filteredShows = tvList.filter((tvObject) => {
    return tvObject.genres.includes(selectedGenre) && tvObject.rating.average > 8;
  });

  return (
    <div>
      <h2>{selectedGenre} Shows</h2>

      <ul>
        {filteredShows.map((tvObject) => {
          return (
            <li key={tvObject.id}>
              Name: {tvObject.name} - Genre: {tvObject.genres.join(", ")} Rating:{" "}
              {tvObject.rating.average}

              {tvObject.image && (
                <img
                  className="tvPoster"
                  src={tvObject.image.medium}
                  alt="tv Poster"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayShows;