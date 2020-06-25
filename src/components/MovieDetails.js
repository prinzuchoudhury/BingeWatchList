import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({ movie }) => {
  const { dispatch } = useContext(MovieContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_MOVIE', id: movie.id })}>
      <div className="name">{movie.name}</div>
      <div className="description">{movie.description}</div>
    </li>
  );
}

export default MovieDetails;