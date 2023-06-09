import React, { Component } from 'react'

export default class ClasslifeCycleMethodsDemo extends Component {


  constructor(props) {
    super(props);

    console.log('constructor...');

    this.state = {

       Name: 'Prem'

    }

  }


  static getDerivedStateFromProps(props, state)
  {
    let upDated = {Name: props.myName || state.Name }

    return upDated;
  }

  render() {
    console.log('render...');
    return (
      <>
        <h1>{this.state.Name}</h1>
      </>
    )
  }
}
