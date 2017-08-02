import React from 'react';
import { Button } from 'reactstrap';

const GameButton = (props) => {
    return (
        <div className="col-2"><Button disabled={props.selectedNumbers.length === 0} color="primary">=</Button></div>
    )
}

export default GameButton