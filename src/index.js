import React from 'react';
import ReactDOM from 'react-dom';

// VIEWS //
import App from './App';

// COMPONENTS //
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/profile" exact render={() => (<App view={'profile'} />) } />
            <Route path="/details/:id" exact render={(route) => (<App earthquake={route.match.params.id} view={'details'} />) } />
            <Route path="/home" exact render={() => (<App view={'home'} />) } />
            <Redirect to={'/home'} />
        </Switch>
    </HashRouter>,
	document.getElementById('app')
);