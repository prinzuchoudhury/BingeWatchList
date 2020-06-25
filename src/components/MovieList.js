import React, { useContext } from 'react';
import MovieDetails from './MovieDetails';
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  return movies.length ? (
    <div className="movie-list">
      <ul>
        {movies.map(movie => {
          return ( <MovieDetails movie={movie} key={movie.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Movies to watch. Better study now :).</div>
  );
}

export default MovieList;