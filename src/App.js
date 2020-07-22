import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';
import BackGround from './components/background';

function App() {
  return (
    <div className="App">
      <BackGround />
      <div className="container">
        <MovieContextProvider>
          <Navbar />
          <MovieList />
          <NewMovie />
        </MovieContextProvider>
      </div>
    </div>
  );
}

export default App;
