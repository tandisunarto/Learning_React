import React from 'react';
import PropTypes from 'prop-types';

class TestButton extends React.Component {

    state = {
        counter: 0
    }

    static contextTypes = {
        testLabel: PropTypes.string
    }

    increment = (e) => {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + 1
                }
            }
        )
    }

    decrement = (e) => {
        console.log(e.nativeEvent);
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter > 0 ? prevState.counter - 1 : 0
                }
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <label className="Red-Font">{this.state.counter}</label>
                </div>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
                <div className="Blue-Font">{this.context.testLabel}</div>
            </div>
        )
    }
}

export default TestButton;