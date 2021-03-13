import React, { useState, useEffect } from 'react';

// COMPONENTS //
import { Link } from 'react-router-dom';

const Table = (props) => {

    const [sortedData, setSortedData] = useState([]);
    const [sort, setSort] = useState({
        column: null,
        order: null
    });

    useEffect(() => {
        setSortedData(props.data.data.features);
    }, [props.data]);

    useEffect(() => {
        if(sortedData.length > 0 && !sort.column && !sort.order){
            sortData('Title');
        }
    }, [sortedData]);

    const sortData = (column) => {
        let order = 'desc';
        if(sort.column === column){
            if(sort.order === 'desc'){
                order = 'asc';
            } else {
                order = 'desc';
            }
        }
        setSort({
            column: column,
            order: order
        });
        const columnMapping = {
            'Title':'place',
            'Magnitude':'mag',
            'Time':'time'
        }
        const prevSort = [...sortedData];
        if(order === 'desc'){
            const newSort = prevSort.sort((a,b) => a.properties[columnMapping[column]] > b.properties[columnMapping[column]] ? 1 : -1);
            setSortedData(newSort);
        } else {
            const newSort = prevSort.sort((a,b) => a.properties[columnMapping[column]] < b.properties[columnMapping[column]] ? 1 : -1);
            setSortedData(newSort);
        }
    }

    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <td tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && sortData('Title')} onClick={() => sortData('Title')}>Title</td>
                    <td tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && sortData('Magnitude')} onClick={() => sortData('Magnitude')}>Magnitude</td>
                    <td tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && sortData('Time')} onClick={() => sortData('Time')}>Time</td>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((earthquake) => 
                    <tr key={earthquake.properties.code}>
                        <td>
                            <Link to={'/details/'+earthquake.properties.code}>{earthquake.properties.place}</Link>
                        </td>
                        <td>{earthquake.properties.mag}</td>
                        <td>{(new Date(earthquake.properties.time).toLocaleString('en-us', {month: 'short', day:'numeric', year: 'numeric', hour:'2-digit', minute:'2-digit',  hour12: true }))}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table;