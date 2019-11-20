import React from "react";

export default class CounterClass extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.incrementCount}>
          {" "}
          Count {this.state.count}
        </button>
      </div>
    );
  }
}
