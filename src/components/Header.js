import React from 'react';

// COMPONENTS //
import { Link } from 'react-router-dom';

export const Header = (props) => {

    return (
        <header data-testid={'header'}>
            <h1 data-testid={'pageTitle'}>{props.data?.site.title}</h1>
            <Link data-testid={'homeLink'} to={'/home'}>
                <img src={props.data.site.logoImage} alt={'Earthquake Zen Garden Logo'} title={'Go back home'} />
            </Link>
            <Link data-testid={'profileLink'} to={'/profile'}>Welcome {props.data.profile.firstName}</Link>
        </header>
    )
}

export default Header;