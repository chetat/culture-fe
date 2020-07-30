import React from 'react';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import UserDetails from './pages/UserDetails';
import AlbumDetails from './pages/AlbumDetails';
import ReleaseYearMovies from './pages/ReleaseYearMovies';
import {Route, Switch} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/detail/:movieId/:movieTitle" component={MovieDetails} />
            <Route exact path="/users/detail/:userId/:username" component={UserDetails} />
            <Route exact path="/albums/detail/:albumId/:albumName" component={AlbumDetails} />
            <Route exact path="/movies/years/:year" component={ReleaseYearMovies} />
        </Switch>
    );
}

export default Routes;