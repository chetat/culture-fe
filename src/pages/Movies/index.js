import  React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DisplayMoviesBtn from '../../components/SearchButtons/DisplayMoviesBtn';
import DisplayUsersBtn from '../../components/SearchButtons/DisplayUsersBtn';
import DisplayMusicBtn from '../../components/SearchButtons/DisplayMusicBtn'
import MovieList from '../../containers/MoviesList';

import './styles.css'

const Movies = () => {
    return (
        <div>
            <div>
                <Container className="my-5">
                        <MovieList />
                </Container>

            </div>
        </div>
    )
};

export default Movies;