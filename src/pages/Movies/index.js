import  React from 'react';
import { Container } from "react-bootstrap";
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