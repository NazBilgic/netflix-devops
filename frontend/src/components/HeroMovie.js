import React from "react";
import "../App.css"; // or a separate HeroMovie.css if you prefer

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HeroMovie({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 30px",
        color: "#fff",
        position: "relative",
      }}
    >
      <div className="hero-overlay">
        <h1>{movie.name}</h1>
        <p style={{ maxWidth: "600px" }}>
          {movie.overview ? movie.overview.slice(0, 150) + "..." : ""}
        </p>
        <button className="hero-button">Play</button>
        <button className="hero-button">More Info</button>
      </div>
    </div>
  );
}

export default HeroMovie;
