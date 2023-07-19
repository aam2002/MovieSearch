import { useEffect, useState } from "react";
import MovieCart from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
//api code  163cbd03

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=163cbd03";

const App = () => {
  const [movies, setMovie] = useState([]);
  const [searchTerm, setsearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };
  useEffect(() => {
    searchMovies("SpiderMan");     
  }, []);
  return (
    <div className="app">
      <h1>MovieKhoj</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCart movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
