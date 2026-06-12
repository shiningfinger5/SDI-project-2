import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './app.css'


function TvCard() {
  const { showID } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showID}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
      });
  }, [showID]);

  if (!show) {
    return <p>Loading...</p>;
  }


  return (
    <div className="detailsPage">
      <div className="detailsCard">
        <div className="detailsBox detailsTitle">
          {show.name}
        </div>

        {show.image && (
          <img
            className="detailsPoster"
            src={show.image.medium}
            alt={show.name}
          />
        )}

        <div className="detailsBox">
          <strong>Genres:</strong> {show.genres.join(", ")}
        </div>

        <div className="detailsBox">
          <strong>Rating:</strong> {show.rating.average}
        </div>

        <div
          className="detailsBox"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
      </div>
    </div>
  );
}
export default TvCard;