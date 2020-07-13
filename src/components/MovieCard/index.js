
import React from 'react';
import {  Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


const MovieCard = (props) => {
  const { title, cover_url, release_date, id} = props;
  return (
    <Card className="movie-card">
      <Link to={"/movies/detail/" + id + "/" + title} style={{"color": "inherit", "textDecoration": "none"}}>
        <Card.Img variant="top" src={cover_url} />
        <Card.Body>
          <Card.Title className="movie-title">{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{release_date}</small>
        </Card.Footer>
      </Link>
    </Card>
  );
}

MovieCard.propTypes = {
  props: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default MovieCard;