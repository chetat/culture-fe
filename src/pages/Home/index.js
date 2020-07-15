import React from 'react';
import { Container, Row, InputGroup, Col, Form, Button, FormControl } from "react-bootstrap";
import MovieCard from '../../components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, filterMovie } from '../../actions/moviesAction';
import { useEffect, useState } from 'react';

import './styles.css'

const Home = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const movies = useSelector(state => state.movies.movies)
    const searched = useSelector(state => state.movies.searched_data)


    const displayData = (movies, searched) => {
            return (
                movies && movies.length > 0 ? movies.map((movie, index) => (
                <MovieCard {...movie} key={index} />
            )) :<div> <h2>Nothing Found</h2> </div>
            )
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(filterMovie(startDate, endDate))
    }


    return (
        <div>
            <div>
             <Container>
                <Form className="justify-content-center my-5" onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                               Start Date
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                type="date"
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                End Date
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                 id="inlineFormInputGroup"
                                 type="date"
                                 onChange={e => setEndDate(e.target.value)}
                                 />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <input type="submit"
                                    className="mb-2 btn btn-primary"
                                value="Search" />
                        </Col>
                    </Form.Row>
                </Form>
                </Container>

                <Container>
                    <h3 className="section-title mb-5">Latest Movies</h3>

                    <div className="card-columns">
                        {displayData(movies, searched)}
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Home;