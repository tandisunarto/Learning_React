import * as React from 'react';
import Button from 'material-ui/Button';


class Counter extends React.Component {
    incrementHandler = () => {

    }

    decrementHandler = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="raised">{}</Button>
                </div>
                <div>
                    <Button variant="raised" onClick={this.incrementHandler} >+</Button>
                </div>
                <div>
                    <Button variant="raised" onClick={this.decrementHandler}>-</Button>
                </div>
            </div>
        )
    }
}

export default Counter