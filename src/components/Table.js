import React from 'react';

export const Table = (props) => {

    if(props.rowMapping){
        return (
            <table data-testid={'table'} className={'detailsTable'}>
                <tbody className={props.fullWidth && 'fullWidth'}>
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