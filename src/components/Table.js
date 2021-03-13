import React from 'react';

const Table = (props) => {

    if(props.rowMapping){
        return (
            <table className={'detailsTable'}>
                <tbody>
                    {props.rowMapping.map((details) =>
                        <tr key={details.label}>
                            <td className={'label'}>{details.label}</td>
                            <td className={'value'}>{details.value}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    } else {
        return null;
    }    
}

export default Table;