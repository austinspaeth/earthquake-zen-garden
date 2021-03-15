import React, {useState, useEffect} from 'react';

// COMPONENTS //
import Table from '../components/Table';
import { withRouter } from 'react-router';

export const Details = (props) => {

    const [earthquake, setEarthquake] = useState(null);

    useEffect(() => {
        if(props.data?.data.features.some((feature) => feature.properties.code === props.earthquake)){
            setEarthquake(props.data?.data.features.find((feature) => feature.properties.code === props.earthquake));
        } else {
            props.history.push('/home');
        }
    }, []);

    const rowMapping = [
        {
            label: "Title",
            value: earthquake?.properties.title
        },
        {
            label: "Magnitude",
            value: earthquake?.properties.mag
        },
        {
            label: "Time",
            value: new Date(earthquake?.properties.time).toLocaleString('en-us', {month: 'short', day:'numeric', year: 'numeric', hour:'2-digit', minute:'2-digit',  hour12: true })
        },
        {
            label: "Status",
            value: earthquake?.properties.status
        },
        {
            label: "Tsunami",
            value: earthquake?.properties.tsunami
        },
        {
            label: "Type",
            value: earthquake?.properties.type
        }
    ]

    if(earthquake){
        return (
            <section data-testid={'detailsView'}>
                <h2 className={'leftAlign'}>{earthquake?.properties.title}</h2>
                <Table fullWidth={true} rowMapping={rowMapping} />
            </section>
        )
    } else {
        return null;
    }
}

export default withRouter(Details);