import React from 'react';
import { Button } from 'reactstrap';

const GameButton = (props) => {
    let button;
    switch(props.answerIsCorrect) {
        case true:
            button = <Button color="success" onClick={props.acceptAnswer}><i className="fa fa-check"></i></Button>;
            break;
        case false:
            button = <Button color="danger"><i className="fa fa-times"></i></Button>;
            break;
        default:
            button = <Button onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0} 
                className="fa fa-check"
                color="default"></Button>;
            break;            
    }
    return (
        <div className="col-2">{button}</div>
    )
}

export default GameButton