import React from 'react';
import Home from './Pages/Home';
import {Route, Switch} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );

}
export default Routes;