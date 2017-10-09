import React from 'react';
import PropTypes from '../node_modules/prop-types/prop-types';

export class Greeting extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {
        subTitle: 'Hello World'
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTitle}</h3>
            </div>
        )
    }
}