import React, { Component } from 'react';

export default class ShouldComponentUpdate extends Component {

    state = {
        count: 0,
    }


  increment = () => {

    this.setState({ count: this.state.count + 1 });

  }

  shouldComponentUpdate(){

    return false; 

    // return true;

  }
  
  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
         
         <button className='btn btn-success text-white' onClick={this.increment}>Increment</button>

      </div>
    )
  }
}
