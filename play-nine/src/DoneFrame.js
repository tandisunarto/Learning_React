import React from 'react'

var DoneFrame = (props) =>  {
    return (
        <div className="redraw-section">{props.doneStatus}
            <div>
                <button onClick={props.resetGame} className="btn btn-success">
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default DoneFrame;