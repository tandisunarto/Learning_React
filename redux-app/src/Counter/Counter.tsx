import * as React from 'react';
import Button from 'material-ui/Button';

import { connect } from 'react-redux'

interface ICounterProps {
    counter: number,
    onIncrement: any,
    onDecrement: any
}

class Counter extends React.Component<ICounterProps> {

    incrementHandler = () => {
        this.props.onIncrement(1);
    }

    decrementHandler = () => {
        this.props.onDecrement(1);
    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="raised">{this.props.counter}</Button>
                </div>
                <div>
                    <Button variant="raised" onClick={this.incrementHandler}>+</Button>
                </div>
                <div>
                    <Button variant="raised" onClick={this.decrementHandler}>-</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        counter: state.ctr.counter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrement: (value: number) => dispatch({
            type: "INC",
            value: value
        }),
        onDecrement: (value: number) => dispatch({
            type: "DEC",
            value: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);