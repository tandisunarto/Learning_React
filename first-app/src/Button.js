import React from 'react';

class TestButton extends React.Component {

    state = {
        counter: 0
    }

    increment = () => {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + 1
                }
            }
        )
    }

    decrement = () => {
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
            </div>
        )
    }
}

export default TestButton;