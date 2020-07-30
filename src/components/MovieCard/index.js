
import React from 'react';
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';


const MovieCard = (props) => {
    const { movie } = props;

    return (
        <Card className="movie-card">
            <Link to={"/movies/detail/" + movie.id + "/" + movie.title} style={{ "color": "inherit", "textDecoration": "none" }}>
                <Card.Img variant="top" className="image-height" src={movie.cover_url} />
                <Card.Body>
                    <Card.Title className="movie-title"><span>{movie.title}</span></Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{movie.release_date}</small>
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