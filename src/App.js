import React from 'react';

// VIEWS //
import Home from './views/Home';
import Details from './views/Details';
import Profile from './views/Profile';

// COMPONENTS //
import Header from './components/Header';

// DATA //
import { data } from './assets/data/data';

// STYLES //
import './assets/css/styles.css';

export const App = (props) => {

    switch(props.view){
        case 'profile':
            return (
                <div data-testid={'profileContainer'} className={'appContainer'}>
                    <Header data={data} />
                    <Profile data={data} />
                </div>
            )
        case 'details':
            return (
                <div data-testid={'detailsContainer'} className={'appContainer'}>
                    <Header data={data} />
                    <Details data={data} earthquake={props.earthquake} />
                </div>
            )
        default:
            return (
                <div data-testid={'homeContainer'} className={'appContainer'}>
                    <Header data={data} />
                    <Home data={data} />
                </div>
            );
    }
}

export default App;