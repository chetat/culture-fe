import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovie } from '../../actions/moviesAction';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';


const MovieDetail = (props) => {
    const movieId = props.match.params.movieId;
    console.log(movieId)
    const dispatch = useDispatch()
    const { actors, movie } = useSelector(state => state.single_movie.movie_data)

    useEffect(() => {
        dispatch(fetchMovie(movieId))
    }, [])



    const render_movie = (movie) => {
        if (typeof movie !== "undefined") {
            console.log("Hello")
            return (
                <div>
                    <Container>
                        <h3 className="text-center py-5">Movie Details</h3>
                        <Row>
                            <Col lg={6}>
                                <div>
                                    <img src={movie.cover_url} alt="Nothing attached" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <h4>Title: {movie.title}</h4>
                                <h4>Release Date : {movie.release_date}</h4>
                                <h4>Duration : {movie.duration}</h4>
                                <h4>Content Rating: {movie.pg}</h4>
                                <h4>Synopsis : <p>{movie.synopsis}</p></h4>
                                <h4>Actors:
                                {actors && actors.length > 0 ? actors.map((actor, index) => (
                                    <div>
                                        <Link to={"/users/detail/" + actor.id + "/" + actor.name} key={index}>
                                            {actor.name}
                                        </Link><br/>
                                    </div>

                                )) :
                                        <div>
                                            <h2>No Actor</h2>
                                        </div>
                                    }
                                </h4>
                                <a href={movie.trailer_url} target="_blank" rel="noopener noreferer"> Watch Now </a> <br/>

                                <Link to="/#" className="btn btn-primary mt-2">Return to Homepage</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                <h2>Could Not Fetch Movie</h2>
            )
        }

    }

    return (
        <div>
            {render_movie(movie)}
        </div>
    )
};
MovieDetail.propTypes = {
    match: PropTypes.object.isRequired,

}

export default MovieDetail;