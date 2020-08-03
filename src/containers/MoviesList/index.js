import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import MovieCard from '../../components/MovieRow';
import {compareValues, sortObjectEntries} from '../../helpers';

const MovieList = () => {

    const [sortType, setSortType] = useState('year');
    const [order, setOrder] = useState('desc');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])


    const movies_years = useSelector(state => state.movies.movies)

    const showMovies = (movies_data) => {
        const years = []
        
        const cat_movies = movies_data.reduce((accu, movie) => {
            let year = movie.year;

            if (!accu[year]) {
                accu[year] = { movies: [movie] }
            } else {
                accu[year].movies.push(movie)
            }
            return accu;
        }, {})

        let iterData = []
        if (sortType === "year" && order === "asc") {
            iterData = Object.entries(cat_movies)
        } else {
            iterData = sortObjectEntries(cat_movies)
        }

        for (const [key, value] of iterData) {
            years.push(<MovieCard movies={value} year={key} ord="asc" />)
        }
        if (years.length > 0) {
            return (
                <div>
                    <Row className="my-5">
                        <Col lg={3}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Order By</label>
                                </div>
                                <select onChange={
                                    (e) => {
                                        setOrder(e.target.value)
                                    }
                                }
                                    className="custom-select" id="inputGroupSelect02">
                                    <option value="desc">Latest Releases</option>
                                    <option value="asc">Earliest Releases</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <h2 className="mt-5">Movies Releases By Years</h2>
                    {years}
                </div>
            )
        } else {
            return (
                <h3 className="my-5">Movies Not Available</h3>
            )
        }
    }



    const sortedByTitle = (movies, sortType, order) => {
        if (movies.length > 0) {
            const sorted = movies.sort(compareValues(sortType, order))
            return showMovies(sorted);
        } else {
            return <div>Nothing Here</div>
        }

    }



    return sortedByTitle(movies_years, sortType, order)
}

export default MovieList;