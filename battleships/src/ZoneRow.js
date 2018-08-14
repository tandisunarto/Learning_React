import React from 'react';
import PropTypes from 'prop-types';
import ZoneCell from './ZoneCell';

class ZoneRow extends React.Component {

    render() {
        return (   
            <React.Fragment>
            {Array(10).fill(0).map((el, index) => {
                return <ZoneCell side={this.props.side} row={this.props.row} col={index} key={index} />;
            })}
        </React.Fragment>
        );
    }
}

ZoneRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ZoneRow