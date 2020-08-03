import  React, { useState } from 'react';
import { Container } from "react-bootstrap";
import MovieList from '../../containers/MoviesList';
import UsersList from '../../containers/UsersList';
import './styles.css';
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



    return (
        <div>
            <div>
                <Container className="my-5">
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