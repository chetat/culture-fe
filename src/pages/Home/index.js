import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { fetchMovies } from "../../actions/moviesAction";
import { fetchMusic } from "../../actions/albumsAction";
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../../containers/MoviesList';
import UsersList from '../../containers/UsersList';
import './styles.css';
import MusicList from '../../containers/MusicList';
import { compareDateValues, compareValues } from '../../helpers';
import MovieCard from '../../components/MovieCard';
import AlbumCard from '../../components/AlbumCard';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    const movies = useSelector((state) => state.movies.movies);
    const sortedMovies = movies.sort(compareDateValues("release_date", "desc"))

    const albums = useSelector((state) => state.albums.albums)
    const sortedAlbums = albums.sort(compareDateValues("release_date", "desc"))
    
    return (
        <div>
            <div>
                <Container className="my-5">
                <h2 className="my-5">Movie Releases</h2>
                    <Row>
                        { sortedMovies && sortedMovies.slice(0,8).map((movie) => {
                            return (
                                <Col lg={3} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </Col>
                            );
                        }) }
                    </Row>
                    <h2 className="my-5">Albums Releases</h2>
                    <Row>
                        { sortedAlbums && sortedAlbums.length > 0 ? sortedAlbums.slice(0,8).map((movie) => {
                            return (
                                <Col lg={3}>
                                    <AlbumCard movie={sortedAlbums} />
                                </Col>
                            );
                        }): 
                        <Col><h3>No Albums Loaded</h3></Col> }
                    </Row>
                </Container>

            </div>
        </div>
    )
};

export default Home;