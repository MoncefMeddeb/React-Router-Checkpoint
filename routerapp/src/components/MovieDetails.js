import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviesData from './MoviesData';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = MoviesData.find((m) => m.id === parseInt(id, 10));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        Watch Trailer
      </a>
    </div>
  );
};

export default MovieDetails;