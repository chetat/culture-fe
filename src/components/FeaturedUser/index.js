
import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const FeaturedUser = (props) => {

    const { data, category } = props;
    console.log("Music Album")
    console.log(data)
    if (typeof data !== "undefined" && category === "Music" && !isEmpty(data) ){
        const album = data;
     
        return (
            <Card className="movie-card my-1">
                <Link to={"/albums/detail/" + album.id + "/" + album.album_name} style={{ "color": "inherit", "textDecoration": "none" }}>
                    <Card.Img variant="top" src={album.cover_url} />
                    <Card.Body>
                        <Card.Title className="movie-title text-center">{album.album_name}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        );
    }

    if(typeof data !== "undefined" && category === "Movies" && !isEmpty(data) ) {
        const movie = data;
        return (
            <Card className="movie-card my-1">
                <Link to={"/movies/detail/" + movie.id + "/" + movie.title} style={{ "color": "inherit", "textDecoration": "none" }}>
                    <Card.Img variant="top" src={movie.cover_url} />
                    <Card.Body>
                        <Card.Title className="movie-title text-center">{movie.title}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
            )
    }

    if (typeof data !== "undefined" || isEmpty(data)) {
        return <h5>No Feature found</h5>
    }
    
}

FeaturedUser.propTypes = {
    props: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })
}

export default FeaturedUser;