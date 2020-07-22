import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from '../../components/MovieCard';
import UserCard from '../../components/UserCard';
import AlbumCard from '../../components/AlbumCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import { useEffect, useState } from 'react';
import DisplayMoviesBtn from '../../components/SearchButtons/DisplayMoviesBtn';
import DisplayUsersBtn from '../../components/SearchButtons/DisplayUsersBtn';
import DisplayMusicBtn from '../../components/SearchButtons/DisplayMusicBtn'



import './styles.css'
import { fetchUsers } from '../../actions/usersAction';
import { fetchAlbums } from '../../actions/albumsAction';

const Home = () => {
    const [moviesDisplay, setMoviesDisplay] = useState(true)
    const [musicDisplay, setMusicDisplay] = useState(false)
    const [usersDisplay, setUsersDisplay] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    const movies_years = useSelector(state => state.movies.movies)
    const users = useSelector(state => state.users.users_data)
    const albums = useSelector(state => state.albums.albums)


    const showMovies = (movies) => {
        const years = []
        for (const [key, value] of Object.entries(movies)) {
            years.push(<MovieCard movies={value} year={key} />)
        }
        return years;
    }
    const showMusic = (albums_data) => {
        const years = []
        const cat_albums = albums_data.reduce((accu, album) => {
            let year = album.year;
            
            if (!accu[year]) {
                accu[year] = {albums: [album]}
            }else {
                accu[year].albums.push(album)
            }
            return accu;
        }, {})
        console.log(cat_albums)
        for (const [key, value] of Object.entries(cat_albums)) {
            years.push(<AlbumCard albums={value} year={key} />)

        }
        return years;
    }
    const showUsers = (users_data) => {
        const users_initial = [];
        const cat_users = users_data.reduce((accu, user) => {
            let initial = user.name[0]

            if (!accu[initial]) {
                accu[initial] = { users: [user] }
            } else {
                accu[initial].users.push(user)
            }
            return accu;
        }, {})

        for (const [key, value] of Object.entries(cat_users)) {
            users_initial.push(<UserCard  users_prop={value} initial={key}  />)
        }

        return users_initial;

    }

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
                    {moviesDisplay &&
                        <Container className="justify-content-center">
                            <h2 className="mt-5">Movie Releases by years</h2>
                            {showMovies(movies_years)}
                        </Container>
                    }
                    {musicDisplay &&
                        <Container className="justify-content-center">
                            <h2 className="mt-5">Music Releases</h2>
                            {showMusic(albums)}
                        </Container>
                    }
                    {usersDisplay &&
                        <Container>
                            <h2 className="mt-5">Active Users</h2>
                            {showUsers(users)}
                        </Container>
                    }
                </Container>

            </div>
        </div>
    )
};

export default Home;