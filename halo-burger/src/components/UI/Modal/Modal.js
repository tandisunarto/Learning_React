import React from 'react';
import Aux from 'hoc/Aux';
import classes from './Modal.css';
import Backdrop from 'components/UI/Backdrop/Backdrop.js';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} backdropClicked={props.modalClosed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0"
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;