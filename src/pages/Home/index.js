import React from 'react';
import { Container } from "react-bootstrap";
import MovieCard from '../../components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies} from '../../actions/moviesAction';
import { useEffect } from 'react';

import './styles.css'

const Home = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)


    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <div>
            <div>
                <Container>
                    <h3 className="section-title">Latest Movies</h3>

                    <div className="card-columns">
                        {movies && movies.length > 0 ? movies.map((movie, index) => (
                            <MovieCard {...movie} key={index} />
                        )) :
                            <div>
                                <h2>Loading Data</h2>
                            </div>
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Home;