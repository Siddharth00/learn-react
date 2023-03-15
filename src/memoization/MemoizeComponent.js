import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function MemoizeComponent() {
  const [title, setTitle] = useState('');
  const [cache, setCache] = useState({});
  const cachedMovies = cache[title];
  const movieUrl = `https://www.omdbapi.com/?s=${title}&apikey=36279deb`;

  const moviesList = useMemo(() => {
    return cachedMovies || null;
  }, [cachedMovies]);

  useEffect(() => {
    const debouncing = setTimeout(() => {
      if (title && !cachedMovies) {
        axios
          .get(movieUrl)
          .then((response) => {
            setCache({
              ...cache,
              [title]: response.data.Search,
            });
          })
          .catch((err) => console.log(err));
      }
    }, 2000);

    return () => clearInterval(debouncing);
  }, [movieUrl, title, cachedMovies, cache]);
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
      {moviesList ? (
        <ul>
          {moviesList.map((movie) => (
            <li key={movie.imdbID}>
              <h2>{`${movie.Title}(${movie.Year})`}</h2>
              <img alt="Poster" src={`${movie.Poster}`} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MemoizeComponent;
