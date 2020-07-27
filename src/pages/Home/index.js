import  React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DisplayMoviesBtn from '../../components/SearchButtons/DisplayMoviesBtn';
import DisplayUsersBtn from '../../components/SearchButtons/DisplayUsersBtn';
import DisplayMusicBtn from '../../components/SearchButtons/DisplayMusicBtn'
import MovieList from '../../containers/MoviesList';
import UsersList from '../../containers/UsersList';


import './styles.css'
import MusicList from '../../containers/MusicList';

const Home = () => {
    const [moviesDisplay, setMoviesDisplay] = useState(true)
    const [musicDisplay, setMusicDisplay] = useState(false)
    const [usersDisplay, setUsersDisplay] = useState(false)

    const triggerMusic = () => {
        setUsersDisplay(false)
        setMoviesDisplay(false)
        setMusicDisplay(true)
    }

    const triggerMovies = () => {
        setUsersDisplay(false)
        setMoviesDisplay(true)
        setMusicDisplay(false)
    }

    const triggerUsers = () => {
        setUsersDisplay(true)
        setMoviesDisplay(false)
        setMusicDisplay(false)
    }

    const sortByTitle = () => {
        return 0
    }
    const sortByDuration = () => {
        return 0;
    }
    const sortByReleaseDate = () => {
        return 0
    }

    return (
        <div>
            <div>
                <Container className="my-5">
                    <Row className="justify-content-center">
                        <Col xs="auto" lg={4}>
                            <DisplayUsersBtn displayUsers={triggerUsers} />
                        </Col>
                        <Col xs="auto" lg={4}>
                            <DisplayMoviesBtn displayMovies={triggerMovies} />
                        </Col>
                        <Col xs="auto" lg={4}>
                            <DisplayMusicBtn displayMusic={triggerMusic} />
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    {moviesDisplay &&

                        <MovieList />
                    }
                    {musicDisplay &&

                       <MusicList />
                    }
                    {usersDisplay &&
                        <UsersList />
                    }
                </Container>

            </div>
        </div>
    )
};

export default Home;