
import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


const MovieCard = (props) => {

  const { movies } = props;
  return (

    <div>
      <h3 className="my-5">{props.year}</h3>
      <Row>

        {movies && movies.map((movie) =>
          <Col lg={3} className="my-2">
            <Card className="movie-card">
              <Link to={"/movies/detail/" + movie.id + "/" + movie.title} style={{ "color": "inherit", "textDecoration": "none" }}>
                <Card.Img variant="top" src={movie.cover_url} />
                <Card.Body>
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{movie.release_date}</small>
                </Card.Footer>
              </Link>
            </Card>
          </Col>
        )}
      </Row>

    </div>
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