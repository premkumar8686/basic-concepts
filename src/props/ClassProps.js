import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    if(this.props.ok)
    {
      alert('True');
    }
    return (
      <>
        <h1>{this.props.name}</h1>
      </>
    )
  }
}
