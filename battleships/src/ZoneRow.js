import React from 'react';
import PropTypes from 'prop-types';
import ZoneCell from './ZoneCell';

const ZoneRow = (props) => {
    return (
    <React.Fragment>
        {Array(10).fill(0).map((el, index) => {
            return <ZoneCell side={props.side} row={props.row} col={index} key={index} />;
        })}
    </React.Fragment>);
}

ZoneRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ZoneRow