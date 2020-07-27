import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import MovieCard from '../../components/MovieCard';



const MovieList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const movies_years = useSelector(state => state.movies.movies)


    const showMovies = (movies) => {
        const years = []
        for (const [key, value] of Object.entries(movies)) {
            years.push(<MovieCard movies={value} year={key} />)
        }

        if (years.length > 0) {
            return (
                <Container className="justify-content-center">
                    <Row>
                    <select>
                        <option value="albums">Albums</option>
                        <option value="genre">Genre</option>
                        <option value="title">Title</option>
                    </select>
                    </Row>
                   
                    <h2 className="mt-5">Movies Releases</h2>
                    {years}
                </Container>
            )
        } else {
            return (
                <h3 className="my-5">Movies Not Available</h3>
            )
        }
    }

    return showMovies(movies_years)
}

export default MovieList;