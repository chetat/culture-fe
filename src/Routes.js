import React from 'react';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import UserDetails from './pages/UserDetails';
import AlbumDetails from './pages/AlbumDetails';
import ReleaseYearMovies from './pages/ReleaseYearMovies';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Users from './pages/Users';



import {Route, Switch} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/detail/:movieId/:movieTitle" component={MovieDetails} />
            <Route exact path="/users/detail/:userId/:username" component={UserDetails} />
            <Route exact path="/albums/detail/:albumId/:albumName" component={AlbumDetails} />
            <Route exact path="/movies/years/:year" component={ReleaseYearMovies} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/users" component={Users} />


        </Switch>
    );
}

export default Routes;