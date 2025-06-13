import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroMovie from "./components/HeroMovie";

const API_KEY = "2ad2df9b1a98008eabe5c2ebce4d4630";
const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_URL_SUITS = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=Suits`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    // Get popular movies for the grid
    fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error fetching movies:", err));

    // Fetch SUITS as the hero movie
    fetch(API_URL_SUITS)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setFeaturedMovie(data.results[0]);
        }
      })
      .catch((err) => console.error("Error fetching SUITS:", err));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <HeroMovie movie={featuredMovie} />
      <h1 className="title">🎬 Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-overview">
              {movie.overview ? movie.overview.slice(0, 100) + "..." : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
