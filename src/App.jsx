import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = `https://omdbapi.com?apikey=${import.meta.env.VITE_RAPID_API_KEY}`;


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //Fetch omdbApi
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Shrek');
  }, [])


  // Function to be able to search with Enter key..
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className='app'>
      <h1>MovieZone</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          // Using both the search icon and Enter keybutton for search.
          onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}
    </div>
  );
}

export default App
