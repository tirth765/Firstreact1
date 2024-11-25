import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleInc = () => {
    if (this.state.counter < 5) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  handleDec = () => {   
    if (this.state.counter > 0) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  render() {
    return (
      <>
        <div>Counter</div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleInc} disabled={this.state.counter >= 5}>
          Increment
        </button>
        <button onClick={this.handleDec} disabled={this.state.counter <= 0}>
          Decrement
        </button>
      </>
    );
  }
}

export default CounterClass;