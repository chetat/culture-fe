import React, { Component } from 'react';

import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, getHistory } from './Store';
// Routes
import Routes from './Routes';

const history = getHistory()
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
                    <Router history={history}>
                        <PersistGate persistor={persistor}>
                            <Routes />
                        </PersistGate>
                    </Router>
                </ConnectedRouter>

            </Provider>
        );
    }
}