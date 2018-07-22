import * as React from 'react';
import Button from 'material-ui/Button';

import { connect } from 'react-redux'

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

const mapStateToProps = (state: any) => {
}

const mapDispatchToProps = (dispatch: any) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);