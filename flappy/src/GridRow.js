import React from 'react';
import GridCell from './GridCell';

function GridRow(props) {
    var style = {
        display: "flex"
    }

    return (
        <div style={style}>
            {
                props.row.map(cell => {
                    return <GridCell cell={cell} />
                })
            }
        </div>
    )
}

export default GridRow