import React, { Component } from 'react';
import Demo1 from './includes/Demo1';
import Demo2 from './includes/Demo2';

export default class UnMounting extends Component {

 state = {
    flag: true,
 }

  toggle = () => {
    this.setState({
        flag: !this.state.flag
    })
  } 
  render() {
    return (
      <>
        <center>
            { this.state.flag ? <Demo1 /> : <Demo2 /> }
            <button className='btn btn-success' onClick={this.toggle}> {this.state.flag ? 'Hide Time' : 'Show Time' } </button>
        </center>
      </>
    )
  }
}
