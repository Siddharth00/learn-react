import React, { useEffect } from 'react';
import axios from 'axios';

function Debounce() {
  const [title, setTitle] = React.useState('');
  const [movieDetail, setMovieDetail] = React.useState(null);
  const movieUrl =
    'http://www.omdbapi.com/?apikey=36279deb&plot=full&type=movie&t=';

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(movieUrl + title)
        .then((res) => {
          console.log(res);
          setMovieDetail(res?.data);
        })
        .catch((err) => console.log(err));
    }, 2000);

    return () => clearInterval(debouncing);
  }, [title]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setTitle(e.target.value)}
      />
      {movieDetail !== null ? (
        <>
          <h1>{movieDetail.Error}</h1>
          {!movieDetail.Error && (
            <>
              <h2>{`${movieDetail.Title}(${movieDetail.Year}) IMDb ${movieDetail.imdbRating}(${movieDetail.imdbVotes})`}</h2>
              <h3>{`${movieDetail.Actors}`}</h3>
              <h4>{`${movieDetail.Genre}(${movieDetail.Runtime})`}</h4>
              <img alt="Poster" src={`${movieDetail.Poster}`} />
              <h5>{`${movieDetail.Plot}`}</h5>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Debounce;
