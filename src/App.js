import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <NewMovie />
      </MovieContextProvider>
    </div>
  );
}

export default App;
