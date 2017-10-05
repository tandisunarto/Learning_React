import React from 'react';
import PropTypes from '../node_modules/prop-types/prop-types';

export class Greeting extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}