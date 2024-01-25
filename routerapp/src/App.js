import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import Add from './components/Add';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending heist movie.',
      posterURL: 'https://m.media-amazon.com/images/I/611ixoDpRLL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.8,
      trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'A tale of hope and perseverance.',
      posterURL: 'https://m.media-amazon.com/images/I/71VNhykMgNL._AC_UF894,1000_QL80_.jpg',
      rating: 4.9,
      trailerLink: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Gotham\'s hero faces the Joker.',
      posterURL: 'https://image.tmdb.org/t/p/original/z4XwvnDZSm40PCdg9vFJmo0W9ri.jpg',
      rating: 4.7,
      trailerLink: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = ({ title, rating }) => {
    const filtered = movies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = movie.rating >= parseFloat(rating);
      return titleMatch && ratingMatch;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    setShowModal(true);
  };

  const handleSaveMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, { ...newMovie, id: prevMovies.length + 1 }]);
    setShowModal(false);
  };

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <Router>
      <Container className="mt-4">
        <h1 className="mb-4">Movie App</h1>
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={filteredMovies} />

        <Button variant="success" className="mt-4" onClick={handleAddMovie}>
          Add New Movie
        </Button>

        <Add showModal={showModal} handleClose={() => setShowModal(false)} handleSaveMovie={handleSaveMovie} />

        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
