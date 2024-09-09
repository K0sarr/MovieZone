import React, { useEffect, useState } from 'react'

const API_URL = 'http://omdbapi.com?apikey=3e1b65eb';
const App = () => {


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Shrek');
  }, []);


  return (
    <div>
      <h1>HEY app</h1>
    </div>
  );
}

export default App
