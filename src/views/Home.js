import React from 'react';

// COMPONENTS //
import HomeTable from '../components/HomeTable';

export const Home = (props) => {

    return (
        <section data-testid={'homeView'}>
            <h2>{props.data?.data.metadata.title}</h2>
            <HomeTable data={props.data} />
        </section>
    )
}

export default Home;