import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <Row className="movie-list">
      {movies.map(movie => (
        <Col key={movie.id} xs={12} md={6} lg={4}>
          <Link to={`/movie/${movie.id}`} className="text-decoration-none">
            <MovieCard {...movie} />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
