import React from 'react';
import ReactDOM from 'react-dom';

// VIEWS //
import App from './App';

// COMPONENTS //
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" render={() => (<App view={'app'} />) } />
        </Switch>
    </HashRouter>,
	document.getElementById('app')
);