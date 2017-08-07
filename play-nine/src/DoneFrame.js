import React from 'react'

var DoneFrame = (props) =>  {
    return (
        <div className="redraw-section">{props.doneStatus}
            <div>
                <button onClick={props.redraw} className="btn btn-success"
                    disabled={props.redraws === 0}>
                    <i className="fa fa-circle-o-notch" /> {props.redraws}
                </button>
            </div>
        </div>
    );
}

export default DoneFrame;