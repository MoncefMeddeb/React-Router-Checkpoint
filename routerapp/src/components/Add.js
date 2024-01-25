import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const Add = ({ showModal, handleClose, handleSaveMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (e, field) => {
    setNewMovie({ ...newMovie, [field]: e.target.value });
  };

  const handleSave = () => {
    handleSaveMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={newMovie.title}
              onChange={(e) => handleInputChange(e, 'title')}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={newMovie.description}
              onChange={(e) => handleInputChange(e, 'description')}
            />
          </Form.Group>
          <Form.Group controlId="posterURL">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter poster URL"
              value={newMovie.posterURL}
              onChange={(e) => handleInputChange(e, 'posterURL')}
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating"
              value={newMovie.rating}
              onChange={(e) => handleInputChange(e, 'rating')}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Add;
