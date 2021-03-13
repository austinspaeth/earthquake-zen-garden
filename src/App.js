import React, {useState, useEffect} from "react";

// VIEWS //


// COMPONENTS //


// STYLES //
import './assets/css/styles.css';

const App = (props) => {

    switch(props.view){
        case 'profile':
            return (
                <div className={'appContainer'}>

                </div>
            )
        case 'details':
            return (
                <div className={'appContainer'}>
                    
                </div>
            )
        default:
            return (
                <div className={'appContainer'}>
                    
                </div>
            );
    }
}

export default (App);