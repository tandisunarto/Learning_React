import React from 'react';
import PropTypes from '../node_modules/prop-types/prop-types';

export default class TestLabel extends React.Component {

    static contextTypes = {
        testLabel: PropTypes.string
    }

    render() {
        return (
            <div>
                <label className="Red-Font">{this.context.testLabel}</label>
            </div>
        )
    }
}