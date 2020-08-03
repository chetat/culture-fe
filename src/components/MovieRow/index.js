
import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import MovieCard from '../MovieCard';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';


const MovieRow = (props) => {

  const { movies } = props.movies;

  return (

    <Container>
      <div>
        <Row className="align-items-center year-row">
          <Col lg={6} className="justify-content-end">
          <h3 className="year-heading">{props.year}</h3>
          </Col>
          <Col lg={6} className="d-flex justify-content-end">
          <Link to={"/movies/years/" + props.year}> SEE ALL </Link>
          </Col>
        </Row>
           
        <Row className="my-2">
          {movies && movies.slice(0, 4).map((movie) =>
            <Col lg={3} md={3} key={movie.id}>
             <MovieCard movie={movie} />
            </Col>
          )}
        </Row>
      </div>
    </Container>

  );
}
export default MovieRow;