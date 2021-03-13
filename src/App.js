import React, {useState, useEffect} from 'react';

// VIEWS //


// COMPONENTS //
import Header from './components/Header';

// DATA //
import { data } from './assets/data/data';

// STYLES //
import './assets/css/styles.css';


const App = (props) => {

    switch(props.view){
        case 'profile':
            return (
                <div className={'appContainer'}>
                    <Header data={data} />
                </div>
            )
        case 'details':
            return (
                <div className={'appContainer'}>
                    <Header data={data} />
                </div>
            )
        default:
            return (
                <div className={'appContainer'}>
                    <Header data={data} />
                </div>
            );
    }
}

export default App;