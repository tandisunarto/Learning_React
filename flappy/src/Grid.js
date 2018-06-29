import React from 'react';
import GridRow from './GridRow';

function Grid(props) {
    return (
        <div>
        {
            props.grid.map(row => {
                return <GridRow row={row} />
            })
        }
        </div>
    )
}

export default Grid;