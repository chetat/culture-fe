import React, { useEffect } from 'react';
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import MovieCard from '../../components/MovieCard';



const MovieList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const movies_years = useSelector(state => state.movies.movies)


    const showMovies = (movies_data) => {
        const years = []
        const cat_movies = movies_data.reduce((accu, movie) => {
            let year = movie.year;
            
            if (!accu[year]) {
                accu[year] = {movies: [movie]}
            }else {
                accu[year].movies.push(movie)
            }
            return accu;
        }, {})
        for (const [key, value] of Object.entries(cat_movies)) {
            console.log(key)
            years.push(<MovieCard movies={value} year={key} />)
        }

        if (years.length > 0) {
            return (
                <Container className="justify-content-center">
                    <Row>
                    Sort By: 
                    <select>
                        <option value="albums">Alphabetical Order</option>
                        <option value="genre">Genres</option>
                        <option value="title">Duration</option>
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