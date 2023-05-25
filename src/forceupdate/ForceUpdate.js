import React, { Component } from "react";

export default class ForceUpdate extends Component {
  count = 0;

  increment = () => {
    this.count++;
    console.log(this.count);
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <h1>{this.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
