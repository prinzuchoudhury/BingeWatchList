import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const NewMovie = () => {
  const { dispatch } = useContext(MovieContext);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_MOVIE', movie: { description, name }});
    setDescription('');
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Movie Name" value={description}
        onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Any description you want to add" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type="submit" value="ADD MOVIE" />
    </form>
  );
}
 
export default NewMovie;