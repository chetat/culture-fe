import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieByYear } from '../../actions/moviesAction';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import MovieCard from '../../components/MovieCard';
import compareValues from '../../helpers'


const ReleaseYearMovies = (props) => {

    const [order, setOrder] = useState('desc');

    const year = props.match.params.year;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieByYear(year))
    }, [])

    const movs = useSelector(state => state.movies.movies_year);
    console.log("Hello")
    if (!movs) {
        return <div>Loading</div>
    }else{
        return (
            <Container>
                <Row className="my-5">
                    <Col lg={3}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect02">Order By</label>
                            </div>
                            <select onChange={
                                (e) => setOrder(e.target.value)
                            }
                                className="custom-select" id="inputGroupSelect02">
                                <option value="desc" selected={true}>Latest Releases</option>
                                <option value="asc">Earliest Releases</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <h2 className="mt-5">Movies Releases in {year}</h2>
                <Row className="my-2">
                    {movs.length > 0 ? movs.map((movie) =>
                        <Col lg={3} md={3}>
                            <MovieCard movie={movie} />
                        </Col>
                    ): <div>No Movie</div>}
                </Row>
            </Container>
        )
    }
    
}
export default ReleaseYearMovies;
