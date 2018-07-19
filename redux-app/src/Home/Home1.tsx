import * as React from "react";

interface IProps {
    greeting: string;
}

export default class Home1 extends React.Component<IProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.greeting} Home #1</h3>
            </div>
        )
    }
}