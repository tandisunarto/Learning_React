import React from 'react';

function GridCell(props) {
    var style = {
        width: 20,
        height: 20,
        border: '1px solid black',
        backgroundColor: props.cell
    }

    return (
        <div style={style}>
        </div>
    )
}

export default GridCell