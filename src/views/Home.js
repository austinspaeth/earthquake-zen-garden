import React, {useState, useEffect} from 'react';

// COMPONENTS //
import HomeTable from '../components/HomeTable';

const Home = (props) => {

    return (
        <section>
            <h2>{props.data?.data.metadata.title}</h2>
            <HomeTable data={props.data} />
        </section>
    )
}

export default Home;