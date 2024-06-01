import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MovieCard from "./MovieCard"
import {movies} from "./movie"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="wrapper">
      <h1>Movie Cart by Asim</h1>
      <div className="movie-container">
        {movies.map((movies, index) => (
          <MovieCard
            key={index}
            ImageUrl={movies.image_url}
            MovieName={movies.movie_name}
            ReleaseYear={movies.release_year}
            Duration={movies.duration}
            Description={movies.description}
            MadeBy={movies.made_by}
            Genres={movies.genres}
          />
        ))}
      </div>
    </div>
  </>
);
