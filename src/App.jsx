import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://omdbapi.com?apikey=3e1b65eb';

 const movie1 = 
  {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
  return (
    <div className='app'>
      <h1>MoviePedia</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value='Shrek'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App
