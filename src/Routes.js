import React from 'react';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails'
import {Route, Switch} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/detail/:movieId/:movieTitle" component={MovieDetails} />

        </Switch>
    );

}
export default Routes;