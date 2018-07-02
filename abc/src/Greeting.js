import React from 'react';

const Greeting1 = (props) => {
    return (
        <div>
            Hi John. I am {props.age}
        </div>
    )
}

class Greeting2 extends React.Component {
    render() {
        return (
            <div>
                Hi Jane. I am {this.props.age}
            </div>
        )
    }
}

export { 
    Greeting1, 
    Greeting2
}