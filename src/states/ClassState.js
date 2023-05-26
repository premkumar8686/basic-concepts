import React, { Component } from 'react'

export default class ClassState extends Component {

    state = {
       count: 0,
    };

    increment = () => {

      this.setState({
        count: this.state.count + 1,
      })

    };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button className='btn btn-success text-white' onClick={this.increment}>Increment</button>
      </>
    )
  }
}
