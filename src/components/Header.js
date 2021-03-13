import React from 'react';

// COMPONENTS //
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <h1>{props.data?.site.title}</h1>
            <Link to={'/home'}>
                <img src={props.data.site.logoImage} alt={'Earthquake Zen Garden Logo'} title={'Go back home'} />
            </Link>
            <Link to={'/profile'}>Welcome {props.data.profile.firstName}</Link>
        </header>
    )
}

export default Header;