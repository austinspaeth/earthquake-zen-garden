import React, {useState, useEffect} from 'react';

// COMPONENTS //
import Table from '../components/Table';

const Home = (props) => {

    return (
        <section>
            <h2>{props.data?.data.metadata.title}</h2>
            <Table data={props.data} />
        </section>
    )
}

export default Home;